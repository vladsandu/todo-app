using AutoMapper;
using System.Collections.Generic;
using System.Linq;
using TodoApp.DataAccess;
using TodoApp.DTO;
using TodoApp.Entity;

namespace TodoApp.Services
{
    public class TodoItemService
    {
        private readonly AppDbContext _dbContext;

        public TodoItemService(AppDbContext dbContext)
        {
            _dbContext = dbContext;
        }

        public IEnumerable<TodoItemDto> Get(string email)
        {
            return _dbContext.TodoItem.Where(t => t.User.Email == email)
                .Select(t => Mapper.Map<TodoItem, TodoItemDto>(t)).ToList();
        }

        public void Add(TodoItemDto todoItemDto, UserDto userDto)
        {
            var user = GetUser(userDto);
            _dbContext.Add(new TodoItem
            {
                Description = todoItemDto.Description,
                User = user
            });
            _dbContext.SaveChanges();
        }

        public void Remove(TodoItemDto todoItemDto, UserDto userDto)
        {
            var user = GetUser(userDto);
            _dbContext.Remove(new TodoItem
            {
                Description = todoItemDto.Description,
                User = user
            });
            _dbContext.SaveChanges();
        }

        private User GetUser(UserDto userDto)
        {
            return _dbContext.User.First(u => u.Email == userDto.Email);
        }
    }
}
