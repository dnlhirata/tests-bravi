using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using ContactList.Domain.Entities;
using ContactList.Domain.Interfaces;
using ContactList.Infra.Data.Context;
using Microsoft.EntityFrameworkCore;

namespace ContactList.Infra.Data.Repository
{
    public class PersonRepository : IPersonRepository
    {
        private readonly ContactListContext _context;

        public PersonRepository(ContactListContext context)
        {
            this._context = context;
        }

        public void Add(Person obj)
        {
            _context.Set<Person>().Add(obj);
            _context.SaveChanges();
        }

        public void Update(Person obj)
        {
            _context.Person.Update(obj);
            _context.SaveChanges();
        }

        public void Remove(Person obj)
        {
            _context.Set<Person>().Remove(obj);
            _context.SaveChanges();
        }

        public Person GetById(long id)
        {
            var person = _context.Person.Where(p => p.Id == id)
                .Include(p => p.Phone)
                .Include(p => p.Email)
                .FirstOrDefault();
            return person;
        }

        public IEnumerable<Person> GetByName(string name)
        {
            return _context.Person.Where(p => p.Name.Contains(name));
        }

        public IEnumerable<Person> GetAll()
        {
            return _context.Person
                .Include(p => p.Phone)
                .Include(p => p.Email)
                .ToList();
        }
    }
}
