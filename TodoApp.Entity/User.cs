using System.Collections.Generic;

namespace TodoApp.Entity
{
    public class User
    {
        public int UserId { get; set; }
        public string Email { get; set; }
        public string EncryptedPassword { get; set; }
        public IList<TodoItem> TodoItems { get; set; }
    }
}
