using System;
using Domain;

namespace Persistence;

public class DbInitializer
{
    public static async Task SeedData(AppDbContext context){
        if(context.Users.Any()) return; 

        var users = new List<User>{
            new(){
                Name = "Mile ",
                Email = "mile@gmail.com",
                Password = "Mile123",
                Role = "User"
            },
            new(){
                Name = "Sebastian",
                Email = "sebas@gmail.com",
                Password = "Sebas123",
                Role = "User"
            },
            new(){
                Name = "Admin",
                Email = "Admin@gmail.com",
                Password = "admin123",
                Role = "Admin"
            }
        };
        context.Users.AddRange(users);
        await context.SaveChangesAsync();
    }
}
