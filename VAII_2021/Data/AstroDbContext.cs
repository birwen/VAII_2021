using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using VAII_2021.Models;

namespace VAII_2021.Data
{
    public class AstroDbContext : DbContext
    {
        public AstroDbContext(DbContextOptions<AstroDbContext> options) : base(options)
        {
        }

        public DbSet<BlogItem> Blogs { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<BlogItem>().ToTable("Blogs");
        }
    }
}
