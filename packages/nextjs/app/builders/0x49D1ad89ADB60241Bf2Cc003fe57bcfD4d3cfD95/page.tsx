import Link from "next/link";

export default function BuilderPage() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "80vh", // Высота для центрирования контента
        backgroundColor: "#1a2a44", // Тёмный фон, как на скриншоте
        padding: "20px",
      }}
    >
      <div
        style={{
          backgroundColor: "#2a3b5a", // Цвет блока, как на скриншоте
          borderRadius: "10px", // Закруглённые углы
          padding: "30px",
          maxWidth: "600px", // Ограничение ширины блока
          color: "white", // Белый текст
          fontFamily: "Arial, sans-serif", // Простой шрифт
        }}
      >
        <h1 style={{ fontSize: "24px", marginBottom: "20px", display: "flex", alignItems: "center" }}>
          <span style={{ marginRight: "10px" }}>🎯</span> About Me
        </h1>
        <img
          src="https://avatars.githubusercontent.com/u/108767414?s=400&u=f4b8b1b44dd9d56d68ea2b8cf097c79c56c25844&v=4" // Ваш аватар с GitHub
          alt="My Avatar"
          style={{
            width: "150px",
            borderRadius: "50%",
            display: "block",
            margin: "0 auto 20px auto", // Центрирование изображения
          }}
        />
        <p style={{ marginBottom: "20px", lineHeight: "1.5" }}>
          Hey, I am danilevski! And trying to learn coding with the help of such a great platform, thanks for being able
          to be here! I am completely new to coding, so please be lenient eheh.
        </p>
        <p style={{ marginBottom: "20px", fontWeight: "bold" }}>
          My address: 0x49D1ad89ADB60241Bf2Cc003fe57bcfD4d3cfD95
        </p>
        <div>
          <h3 style={{ fontSize: "18px", marginBottom: "10px" }}>Connect with me:</h3>
          <ul style={{ listStyleType: "disc", paddingLeft: "20px", margin: "0" }}>
            <li>
              <Link
                href="https://github.com/dnlvskey"
                target="_blank"
                style={{ color: "#66b3ff", textDecoration: "none" }}
              >
                GitHub
              </Link>
            </li>
            <li>
              <Link href="https://x.com/dnlvskey" target="_blank" style={{ color: "#66b3ff", textDecoration: "none" }}>
                X
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
