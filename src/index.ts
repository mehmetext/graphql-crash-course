// Type tanımlamaları
interface User {
  id: number;
  name: string;
  email: string;
  age?: number; // Opsiyonel alan
}

// Örnek bir fonksiyon
function createUser(name: string, email: string, age?: number): User {
  return {
    id: Math.floor(Math.random() * 1000),
    name,
    email,
    age,
  };
}

// Örnek kullanım
const user: User = createUser("John Doe", "john@example.com", 30);

// Tip güvenliği örneği
function displayUserInfo(user: User): void {
  console.log(`User ID: ${user.id}`);
  console.log(`Name: ${user.name}`);
  console.log(`Email: ${user.email}`);
  if (user.age) {
    console.log(`Age: ${user.age}`);
  }
}

// Fonksiyonu çağırma
displayUserInfo(user);
