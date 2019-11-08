using System;
using System.Collections.Generic;
using System.Text;
using ContactList.Domain.Entities;

namespace ContactList.Domain.Interfaces
{
    public interface IEmailService
    {
        Email Insert(Email obj);
        void Update(Email obj);
        void Delete(Email obj);
        Email GetById(long id);
        IEnumerable<Email> GetAll();
    }
}
