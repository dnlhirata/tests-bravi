using System;
using System.Collections.Generic;
using System.Text;
using ContactList.Domain.Entities;

namespace ContactList.Domain.Interfaces
{
    public interface IPersonService
    {
        Person Insert(Person obj);
        void Update(Person obj);
        void Delete(Person obj);
        Person GetById(long id);
        IEnumerable<Person> GetByName(string name);
        IEnumerable<Person> GetAll();
        
    }
}
