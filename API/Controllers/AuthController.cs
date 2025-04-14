using System;
using Domain;
using Microsoft.AspNetCore.Mvc;
using Persistence;

namespace API.Controllers;

public class AuthController(AppDbContext context) : BasiApiController
{
    private readonly AppDbContext context = context;
    
     [HttpGet("{email}/{password}")]
        public ActionResult<List<User>> Login(string email, string password)
        {
            var user = context.Users.Where(x => x.Email.Equals(email) && x.Password.Equals(password)).ToList();
            if (user == null || user.Count == 0) return NotFound();
            
            return user;
        }
}
