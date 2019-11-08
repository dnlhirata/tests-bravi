using System;
using System.Collections.Generic;
using System.Text;
using ContactList.Domain.Entities;
using ContactList.Domain.Interfaces;

namespace ContactList.Service.Services
{
    public class PhoneService : IPhoneService
    {
        private readonly IUnitOfWok _unitOfWok;

        public PhoneService(IUnitOfWok unitOfWok)
        {
            this._unitOfWok = unitOfWok;
        }

        public Phone Insert(Phone obj)
        {
            _unitOfWok.Phones.Add(obj);
            return obj;
        }

        public void Update(Phone obj)
        {
            _unitOfWok.Phones.Update(obj);
        }

        public void Delete(Phone obj)
        {
            _unitOfWok.Phones.Remove(obj);
        }

        public Phone GetById(long id)
        {
            return _unitOfWok.Phones.GetById(id);
        }

        public IEnumerable<Phone> GetAll()
        {
            return _unitOfWok.Phones.GetAll();
        }
    }
}
