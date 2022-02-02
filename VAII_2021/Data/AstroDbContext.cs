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
        public DbSet<EshopItem> EshopItems { get; set; }
        public DbSet<Order> Orders { get; set; }
        public DbSet<PaymentDetail> PaymentDetails { get; set; }


        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<BlogItem>().ToTable("Blogs");
            modelBuilder.Entity<EshopItem>().ToTable("EshopItems");
            modelBuilder.Entity<Order>().ToTable("Orders");
            modelBuilder.Entity<PaymentDetail>().ToTable("PaymentDetails");
        }
    }
}
