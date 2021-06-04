class Profile {
      setProfile(name, age, email, numb) {
        this.name = name;
        this.age = age;
        this.email = email;
        this.numb = numb;
      }
      getProfile() {
        document.forms['Login']['fName'].value = localStorage.getItem("name");
        document.forms['Login']['ageField'].value = localStorage.getItem("age");
        document.forms['Login']['email'].value = localStorage.getItem("email");
        document.forms['Login']['number'].value = localStorage.getItem("number");
      }
      saveProfile() {
        localStorage.setItem("name", this.name);
        localStorage.setItem("age", this.age);
        localStorage.setItem("email", this.email);
        localStorage.setItem("number", this.numb);
      }
    }