using System.Threading.Tasks;
using System.Collections.Generic;
using server.Model;

namespace server.Repository
{
    public interface IWordRepository
    {
        Task AddWordSync(string text, string translation, string explanation);

        Task<List<Word>> getWordsAsync();
    }
}