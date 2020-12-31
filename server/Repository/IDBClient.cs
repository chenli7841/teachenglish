using System.Threading.Tasks;
using System.Collections.Generic;
using server.Model;

namespace server.Repository
{
    public interface IDBClient
    {
        Task insertWordAsync(string text, string translation, string explanation);

        Task<List<Word>> getWordsAsync();
    }
}