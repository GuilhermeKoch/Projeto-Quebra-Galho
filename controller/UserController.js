class UserController {
    constructor(userModel) {
        this.userModel = userModel;
        this.setupEventListeners();
    }

    setupEventListeners() {
        const form = document.getElementById('userForm');
        if (form) {
            form.addEventListener('submit', this.createUserController.bind(this));
        }
    }


    createUserController(event) {
        event.preventDefault();
        const formData = new FormData(event.target);
        const userData = {
            firstname: formData.get('firstname'),
            lastname: formData.get('lastname'),
            email: formData.get('email'),
            number: formData.get('number'),
            password: formData.get('password'),
            gender: formData.get('gender')
        };

        this.userModel.createUser(userData)
            .then(data => {
                console.log('User created:', data);
                alert('Usuário criado com sucesso!');  // Popup de sucesso
            })
            .catch(error => {
                console.error('Error creating user:', error);
                alert('Erro ao criar usuário: ' + error.message);  // Popup de erro
            });
    }
}