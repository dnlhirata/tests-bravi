using System;
using System.Collections.Generic;
using System.Text;
using ContactList.Domain.Entities;

namespace ContactList.Domain.Interfaces
{
    public interface IPhoneService
    {
        Phone Insert(Phone obj);
        void Update(Phone obj);
        void Delete(Phone obj);
        Phone GetById(long id);
        IEnumerable<Phone> GetAll();
    }
}
