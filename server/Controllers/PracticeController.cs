using Microsoft.AspNetCore.Mvc;
using server.Repository;
using server.Model;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace server.Controllers
{
    [ApiController]
    [Route("api/practice")]
    public class PracticeController : ControllerBase
    {
        private IWordRepository _wordRepo;
        public PracticeController(IWordRepository wordRepo)
        {
            _wordRepo = wordRepo;
        }

        [HttpPost("addword")]
        public async Task AddWord(AddWordRequest request)
        {
            await _wordRepo.AddWordSync(request.Word, request.Translation, request.Explanation);
        }

        [HttpGet("getwords")]
        public async Task<List<Word>> GetWords()
        {
            List<Word> words = await _wordRepo.getWordsAsync();
            return words;
        }
    }
}
