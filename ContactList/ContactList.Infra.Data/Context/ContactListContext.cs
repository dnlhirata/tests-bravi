using System;
using System.Collections.Generic;
using System.Text;
using ContactList.Domain.Entities;
using ContactList.Infra.Data.Mapping;
using Microsoft.EntityFrameworkCore;

namespace ContactList.Infra.Data.Context
{
    public class ContactListContext : DbContext
    {
        public ContactListContext() : base() { }
        public ContactListContext(string connectionString) : base(){_connectionString = connectionString;}
        public ContactListContext(DbContextOptions options) : base(options){}
        private readonly string _connectionString = "Host=localhost;Database=postgres;Username=postgres;Password=admin;Port:5432";

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseNpgsql(_connectionString ?? "dummy");
        }

        public DbSet<Person> Person { get; set; }
        public DbSet<Phone> Phone { get; set; }
        public DbSet<Email> Email { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
            modelBuilder.Entity<Person>(new PersonMap().Configure);
        }
    }

}
