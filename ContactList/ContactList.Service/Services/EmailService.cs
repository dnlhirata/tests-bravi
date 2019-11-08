using System;
using System.Collections.Generic;
using System.Text;
using ContactList.Domain.Entities;
using ContactList.Domain.Interfaces;

namespace ContactList.Service.Services
{
    public class EmailService : IEmailService
    {
        private readonly IUnitOfWok _unitOfWok;

        public EmailService(IUnitOfWok unitOfWok)
        {
            this._unitOfWok = unitOfWok;
        }

        public Email Insert(Email obj)
        {
            _unitOfWok.Emails.Add(obj);
            return obj;
        }

        public void Update(Email obj)
        {
            _unitOfWok.Emails.Update(obj);
        }

        public void Delete(Email obj)
        {
            _unitOfWok.Emails.Remove(obj);
        }

        public Email GetById(long id)
        {
            return _unitOfWok.Emails.GetById(id);
        }

        public IEnumerable<Email> GetAll()
        {
            return _unitOfWok.Emails.GetAll();
        }
    }
}
