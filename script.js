
const profile = {
    name: 'Eduardo Oliveira',
    bio: 'Desenvolvedor front-end com foco em sites profissionais, interfaces responsivas e soluções que ajudam negócios a gerar mais contatos e oportunidades.'
};

document.getElementById('devName').textContent = profile.name;
document.getElementById('devBio').textContent = profile.bio;

const initials = profile.name
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map(name => name[0].toUpperCase())
    .join('');

document.getElementById('avatarText').textContent = initials;
