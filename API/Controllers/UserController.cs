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
    //Good practice to use async/await for database queries
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
    }
}
