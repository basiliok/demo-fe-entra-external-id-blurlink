import { useApiFetch } from '../hooks/useApiFetch';
import { currentUserSchema } from '../schemas/user.schema';

export const WelcomeMessage = () => {
    const { data: currentUser, error } = useApiFetch('/me', currentUserSchema);

    if (error) {
        return <p>No se pudieron cargar tus datos.</p>;
    }

    if (!currentUser) {
        return <p>Cargando tus datos...</p>;
    }

    return (
        <section>
            <h2>¡Bienvenido, {currentUser.name}!</h2>
            <p>Nombre: {currentUser.givenName}</p>
            <p>Apellido: {currentUser.familyName}</p>
            <p>Email: {currentUser.email}</p>
        </section>
    );
};
