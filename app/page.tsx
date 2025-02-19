import React from 'react';

const App = () => {
  const data = [
    { no: 1, nim: '12345', nama: 'John Doe', gender: 'Laki-laki', prodi: 'Informatika', kelas: 'A', semester: 3, alamat: 'Jalan Merdeka', hobby: 'Bermain Sepak Bola', citaCita: 'Software Engineer' },
    { no: 2, nim: '12346', nama: 'Jane Smith', gender: 'Perempuan', prodi: 'Sistem Informasi', kelas: 'B', semester: 2, alamat: 'Jalan Kebon', hobby: 'Membaca', citaCita: 'Data Scientist' },
    { no: 3, nim: '12347', nama: 'Ali Budi', gender: 'Laki-laki', prodi: 'Teknik Elektro', kelas: 'C', semester: 4, alamat: 'Jalan Kenanga', hobby: 'Bermain Musik', citaCita: 'Electrical Engineer' },
    { no: 4, nim: '12348', nama: 'Siti Aisyah', gender: 'Perempuan', prodi: 'Bioteknologi', kelas: 'A', semester: 5, alamat: 'Jalan Raya', hobby: 'Travelling', citaCita: 'Biotech Researcher' },
  ];

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-center text-xl mb-4">Daftar Mahasiswa</h1>
      
      {/* Tabel di tampilan Desktop */}
      <div className="hidden md:block overflow-x-auto">
        <table className="table-auto w-full border-collapse">
          <thead>
            <tr>
              <th className="border px-4 py-2">No</th>
              <th className="border px-4 py-2">NIM</th>
              <th className="border px-4 py-2">Nama</th>
              <th className="border px-4 py-2">Gender</th>
              <th className="border px-4 py-2">Prodi</th>
              <th className="border px-4 py-2">Kelas</th>
              <th className="border px-4 py-2">Semester</th>
              <th className="border px-4 py-2">Alamat</th>
              <th className="border px-4 py-2">Hobby</th>
              <th className="border px-4 py-2">Cita-cita</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={item.no}>
                <td className="border px-4 py-2">{item.no}</td>
                <td className="border px-4 py-2">{item.nim}</td>
                <td className="border px-4 py-2">{item.nama}</td>
                <td className="border px-4 py-2">{item.gender}</td>
                <td className="border px-4 py-2">{item.prodi}</td>
                <td className="border px-4 py-2">{item.kelas}</td>
                <td className="border px-4 py-2">{item.semester}</td>
                <td className="border px-4 py-2">{item.alamat}</td>
                <td className="border px-4 py-2">{item.hobby}</td>
                <td className="border px-4 py-2">{item.citaCita}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Tabel di tampilan Mobile */}
      <div className="block md:hidden">
        {data.map((item) => (
          <div key={item.no} className="border p-4 mb-4 rounded-md shadow-sm">
            <div className="flex justify-between mb-2">
              <span className="font-bold">No:</span>
              <span>{item.no}</span>
            </div>
            <div className="flex justify-between mb-2">
              <span className="font-bold">NIM:</span>
              <span>{item.nim}</span>
            </div>
            <div className="flex justify-between mb-2">
              <span className="font-bold">Nama:</span>
              <span>{item.nama}</span>
            </div>
            <div className="flex justify-between mb-2">
              <span className="font-bold">Gender:</span>
              <span>{item.gender}</span>
            </div>
            <div className="flex justify-between mb-2">
              <span className="font-bold">Prodi:</span>
              <span>{item.prodi}</span>
            </div>
            <div className="flex justify-between mb-2">
              <span className="font-bold">Kelas:</span>
              <span>{item.kelas}</span>
            </div>
            <div className="flex justify-between mb-2">
              <span className="font-bold">Semester:</span>
              <span>{item.semester}</span>
            </div>
            <div className="flex justify-between mb-2">
              <span className="font-bold">Alamat:</span>
              <span>{item.alamat}</span>
            </div>
            <div className="flex justify-between mb-2">
              <span className="font-bold">Hobby:</span>
              <span>{item.hobby}</span>
            </div>
            <div className="flex justify-between mb-2">
              <span className="font-bold">Cita-cita:</span>
              <span>{item.citaCita}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
