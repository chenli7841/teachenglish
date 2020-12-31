using System.Threading.Tasks;
using System.Collections.Generic;
using server.Model;

namespace server.Repository
{
    public class WordRepository: IWordRepository
    {
        private IDBClient _dbClient;
        public WordRepository(IDBClient dBClient)
        {
            _dbClient = dBClient;
        }

        public async Task AddWordSync(string text, string translation, string explanation)
        {
            await _dbClient.insertWordAsync(text, translation, explanation);
        }

        public async Task<List<Word>> getWordsAsync()
        {
            return await _dbClient.getWordsAsync();
        }
    }
}