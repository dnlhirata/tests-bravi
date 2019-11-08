using System;
using System.Collections.Generic;
using System.Text;
using ContactList.Domain.Entities;

namespace ContactList.Domain.Interfaces
{
    public interface IPhoneRepository
    {
        void Add(Phone obj);
        void Update(Phone obj);
        void Remove(Phone obj);
        Phone GetById(long id);
        IEnumerable<Phone> GetAll();
    }
}
