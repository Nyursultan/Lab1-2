export default function UserForm({nameuser}) {
    return (
        <div key={nameuser.id}>
            {nameuser.name}
        </div>
    )
}