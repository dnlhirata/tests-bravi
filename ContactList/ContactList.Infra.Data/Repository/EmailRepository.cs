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
    public class EmailRepository : IEmailRepository
    {
        private readonly ContactListContext _context;

        public EmailRepository(ContactListContext context)
        {
            this._context = context;
        }

        public void Add(Email obj)
        {
            _context.Set<Email>().Add(obj);
            _context.SaveChanges();
        }

        public void Update(Email obj)
        {
            _context.Entry(obj).State = EntityState.Modified;
            _context.SaveChanges();
        }

        public void Remove(Email obj)
        {
            _context.Email.Remove(obj);
            _context.SaveChanges();

        }

        public Email GetById(long id)
        {
            return _context.Set<Email>().Find(id);
        }

        public IEnumerable<Email> GetAll()
        {
            return _context.Set<Email>().ToList();
        }
    }
}
