const About = {
  template: `
<div class="home-container">
  <h2>Profil Pengembang</h2>
  <div style="display: flex; align-items: center; gap: 20px; margin: 20px 0; padding: 15px; border: 1px solid #ddd; border-radius: 8px; background: #fff;">
    <img :src="profile.avatar" :alt="profile.nama" style="width: 100px; height: 100px; border-radius: 50%; border: 3px solid #3152d6;">
    <div>
      <p style="margin: 5px 0;"><strong>Nama:</strong> {{ profile.nama }}</p>
      <p style="margin: 5px 0;"><strong>NIM:</strong> {{ profile.nim }}</p>
      <p style="margin: 5px 0;"><strong>Kelas:</strong> {{ profile.kelas }}</p>
    </div>
  </div>
</div>
`,
  data() {
    return {
      profile: {
        nama: "Muhammad Dzaky Al Hafidz",
        nim: "312410539",
        kelas: "I241E",
        avatar: "gambar/ayo.png"
      }
    };
  }
};
