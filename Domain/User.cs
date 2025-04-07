using System;
using System.ComponentModel.DataAnnotations;

namespace Domain;

public class User
{
    [Key]
    public string Id { get; set; } = Guid.NewGuid().ToString();
    public required string Name { get; set; }
    public required string Email { get; set; } 
    public required string Password { get; set; }
    public required string Role { get; set; } 
}
