class ProfissionaisModel {
    constructor() {
        this.apiUrl = "https://66416e463d66a67b3433d99d.mockapi.io/Profissionais";
        this.setupEventListeners();
    }

    setupEventListeners() {
        const form = document.getElementById('profissionalForm');
        if (form) {
            form.addEventListener('submit', this.createProfissional.bind(this));
        }
    }


    createProfissional(event) {
        event.preventDefault();
        const formData = new FormData(event.target);
        const userData = {
            name: formData.get('nome'),
            descricao: formData.get('descricao'),
        };
        return fetch(this.apiUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userData)
        })
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