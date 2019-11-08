using System;
using System.Collections.Generic;
using System.Text;
using ContactList.Domain.Entities;

namespace ContactList.Domain.Interfaces
{
    public interface IUnitOfWok
    {
        IPersonRepository People { get; }
        IPhoneRepository Phones { get; }
        IEmailRepository Emails { get; }

        void SaveChanges();
        void Commit();
        void Rollback();
    }
}
