using AutoMapper;
using TodoApp.DTO;
using TodoApp.Entity;

namespace TodoApp.Services
{
    public static class MappingService
    {
        public static void Initialize()
        {
            Mapper.Initialize(cfg => cfg.CreateMap<TodoItem, TodoItemDto>().ConvertUsing<TodoItemConvertor>());
        }
    }

    public class TodoItemConvertor : ITypeConverter<TodoItem, TodoItemDto>
    {
        public TodoItemDto Convert(TodoItem source, TodoItemDto destination, ResolutionContext context)
        {
            return new TodoItemDto
            {
                Description = source.Description
            };
        }
    }
}
