using System;
using System.Collections.Generic;
using System.Text;
using ContactList.Domain.Entities;
using ContactList.Domain.Interfaces;
using ContactList.Infra.Data.Context;
using ContactList.Infra.Data.Repository;
using Microsoft.EntityFrameworkCore.Storage;

namespace ContactList.Infra.Data.UnitOfWok
{
    public class UnitOfWok : IUnitOfWok
    {
        private readonly ContactListContext _context;
        private IDbContextTransaction _currentTransaction;

        public UnitOfWok(string connectionString)
        {
            this._context = new ContactListContext(connectionString);
            this.People = new PersonRepository(this._context);
            this.Phones = new PhoneRepository(this._context);
            this.Emails = new EmailRepository(this._context);
        }

        public IPersonRepository People { get; }
        public IPhoneRepository Phones { get; }
        public IEmailRepository Emails { get; }

        public void SaveChanges()
        {
            if (this._currentTransaction == null)
                this._currentTransaction = _context.Database.BeginTransaction();
            _context.SaveChanges();
        }

        public void Commit()
        {
            if (this._currentTransaction != null)
            {
                this._currentTransaction.Commit();
                this._currentTransaction = null;
            }
        }

        public void Rollback()
        {
            if (this._currentTransaction != null)
            {
                this._currentTransaction.Rollback();
                this._currentTransaction = null;
            }
        }
    }
}
