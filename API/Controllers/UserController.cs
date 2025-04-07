using Domain;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace API.Controllers
{
    public class UserController(AppDbContext context) : BasiApiController
    {
        private readonly AppDbContext context = context;

        [HttpGet]	
        public async Task<ActionResult<List<User>>> GetUsers()
        {
            return await context.Users.ToListAsync();
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<User>> GetUserDetail(string id)
        {
            var activity = await context.Users.FindAsync(id);

            if (activity == null) return NotFound();
            
            return activity;
        }

        [HttpPost]
        public async Task<ActionResult> CreateUser(User user)
        {
            context.Users.Add(user);
            await context.SaveChangesAsync();
            return Ok(user.Id);
        }

        [HttpPut ("{id}")]
        public async Task<ActionResult> UpdateUser(string id, User user)
        {
            var existingUser = await context.Users.FindAsync(id);

            if (existingUser == null) return NotFound();

            existingUser.Name = user.Name;
            existingUser.Email = user.Email;
            existingUser.Password = user.Password;
            existingUser.Role = user.Role;

            await context.SaveChangesAsync();

            return Ok();
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult> DeleteUser(string id)
        {
            var user = await context.Users.FindAsync(id);

            if (user == null) return NotFound();

            context.Users.Remove(user);
            await context.SaveChangesAsync();

            return Ok();
        }
    }
}
