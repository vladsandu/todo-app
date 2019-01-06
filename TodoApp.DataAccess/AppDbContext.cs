using Microsoft.EntityFrameworkCore;
using TodoApp.Entity;

namespace TodoApp.DataAccess
{
    public class AppDbContext: DbContext
    {
        public virtual DbSet<User> User { get; set; }
        public virtual DbSet<TodoItem> TodoItem { get; set; }

        public AppDbContext(DbContextOptions<AppDbContext> options)
            : base(options) { }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
        
        }
    }
}
