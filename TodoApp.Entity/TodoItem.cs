namespace TodoApp.Entity
{
    public class TodoItem
    {
        public int TodoItemId { get; set; }
        public string Description { get; set; }
        public User User { get; set; }
    }
}
