using MongoDB.Driver;
using MongoDB.Bson;
using System.Threading.Tasks;
using System.Collections.Generic;
using System.Linq;
using server.Model;

namespace server.Repository
{
    public class DBClient: IDBClient
    {
        private MongoClient client;

        private string connectionString = "mongodb://lispace-cosmos:KkkQ5E3VxjqwksxuLwNt3CTX2iHLKgH1R6WfEacBEyKxp951rzPZIoZczjK8curhhogMz9eClDOunnRPYrUBlw==@lispace-cosmos.mongo.cosmos.azure.com:10255/?ssl=true&replicaSet=globaldb&retrywrites=false&maxIdleTimeMS=120000&appName=@lispace-cosmos@";

        private IMongoCollection<BsonDocument> WordCollection { 
            get { return client.GetDatabase("lispace_db").GetCollection<BsonDocument>("word"); }
        }

        public DBClient()
        {
            client = new MongoClient(connectionString);
        }

        public async Task insertWordAsync(string text, string translation, string explanation)
        {
            var document = new BsonDocument {
                {"text", text},
                {"translation", translation},
                {"explanation", explanation}
            };
            await WordCollection.InsertOneAsync(document);
        }

        public async Task<List<Word>> getWordsAsync()
        {
            var documents = (await WordCollection.FindAsync(new BsonDocument())).ToList();
            List<Word> words = documents.Select(d => new Word {
                Text = d["text"].ToString(),
                Translation = d["translation"].ToString(),
                Explanation = d["explanation"]?.ToString() 
            }).ToList();
            return words;
        }
    }
}