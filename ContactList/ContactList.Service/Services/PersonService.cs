using System;
using System.Collections.Generic;
using System.Text;
using ContactList.Domain.Entities;
using ContactList.Domain.Interfaces;

namespace ContactList.Service.Services
{
    public class PersonService : IPersonService
    {
        private readonly IUnitOfWok _unitOfWok;

        public PersonService(IUnitOfWok unitOfWok)
        {
            this._unitOfWok = unitOfWok;
        }

        public Person Insert(Person obj)
        {
            _unitOfWok.People.Add(obj);
            return obj;
        }

        public void Update(Person obj)
        {
            _unitOfWok.People.Update(obj);
        }

        public void Delete(Person obj)
        {
            _unitOfWok.People.Remove(obj);
        }

        public Person GetById(long id)
        {
            return _unitOfWok.People.GetById(id);
        }

        public IEnumerable<Person> GetByName(string name)
        {
            return _unitOfWok.People.GetByName(name);
        }

        public IEnumerable<Person> GetAll()
        {
            return _unitOfWok.People.GetAll();
        }

        
    }
}
