using System;
using System.Collections.Generic;
using System.Text;
using ContactList.Domain.Entities;

namespace ContactList.Domain.Interfaces
{
    public interface IEmailRepository
    {
        void Add(Email obj);
        void Update(Email obj);
        void Remove(Email obj);
        Email GetById(long id);
        IEnumerable<Email> GetAll();
    }
}
