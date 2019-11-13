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
    public class PhoneRepository : IPhoneRepository
    {
        private readonly ContactListContext _context;

        public PhoneRepository(ContactListContext context)
        {
            this._context = context;
        }

        public void Add(Phone obj)
        {
            _context.Set<Phone>().Add(obj);
            _context.SaveChanges();
        }

        public void Update(Phone obj)
        {
            _context.Entry(obj).State = EntityState.Modified;
            _context.SaveChanges();
        }

        public void Remove(Phone obj)
        {
            _context.Phone.Remove(obj);
            _context.SaveChanges();
        }

        public Phone GetById(long id)
        {
            return _context.Set<Phone>().Find(id);
        }

        public IEnumerable<Phone> GetAll()
        {
            return _context.Set<Phone>().ToList();
        }
    }
}
