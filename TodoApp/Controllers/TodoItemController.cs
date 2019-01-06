using System.Security.Claims;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Mvc;
using TodoApp.DTO;
using TodoApp.Services;

namespace TodoApp.Controllers
{
    [Route("api/[controller]"), ApiController]
    public class TodoItemController : ControllerBase
    {
        private readonly TodoItemService _todoItemService;

        public TodoItemController(TodoItemService todoItemService)
        {
            _todoItemService = todoItemService;
        }

        [HttpGet]
        public IActionResult Get()
        {
            var email = User.FindFirst(ClaimTypes.Email).Value;
            return Ok(_todoItemService.Get(email));
        }
    }
}
