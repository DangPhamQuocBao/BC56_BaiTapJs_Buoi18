var themSo = [];
var mangSoThuc = [];

// Thêm số

function themSoN() {
  var nhapSo = document.getElementById("nhapSo").value * 1;
  themSo.push(nhapSo);
  document.querySelector("#hienThi").innerHTML = themSo;
  console.log(themSo);
  document.querySelector("#hienThiMang").innerHTML = themSo;
}

// 1> Tổng số dương trong mảng

function tongSoDuong() {
  var tongCuaSoDuong = 0;
  for (var i = 0; i < themSo.length; i++) {
    if (themSo[i] > 0) {
      tongCuaSoDuong += themSo[i];
    }
  }
  document.querySelector("#hienTHiTongCuaSoDuongTrongMang").innerHTML =
    tongCuaSoDuong;
}

// 2. Đếm số dương trong mảng

function demSoDuongTrongMang() {
  var demSoDuong = 0;
  for (var i = 0; i <= themSo.length; i++) {
    if (themSo[i] > 0) {
      demSoDuong++;
    }
  }
  document.querySelector("#hienThiDemSoDuong").innerHTML = demSoDuong;
}

// 3. Tìm số nhỏ nhất

function timSoNhoNhat() {
  var soNhoNhat = themSo[0];
  for (var i = 0; i <= themSo.length; i++) {
    var timSoNhoNhat = themSo[i];
    if (timSoNhoNhat < soNhoNhat) {
      soNhoNhat = timSoNhoNhat;
    }
  }
  document.querySelector("#hienThiSoNhoNhat").innerHTML = soNhoNhat;
}

// 4. Tìm số dương nhỏ nhất

function timSoDuongNhoNhat() {
  if (themSo.length === 0) {
    document.querySelector("#hienThiSoDuongNhoNhat").innerHTML = "Không có số dương trong mảng";
    return;
  }
  var soDuongNhoNhat = Infinity;
  for (var i = 0; i < themSo.length; i++) {
    if (themSo[i] > 0 && themSo[i] < soDuongNhoNhat) {
      soDuongNhoNhat = themSo[i];
    }
  }
  if (soDuongNhoNhat === Infinity) {
    document.querySelector("#hienThiSoDuongNhoNhat").innerHTML = "Không có số dương trong mảng.";
  } else {
    document.querySelector("#hienThiSoDuongNhoNhat").innerHTML = "Số dương nhỏ nhất trong mảng là: " + soDuongNhoNhat;
  }
}

// 5. Tìm số chẵn cuối cùng trong mảng 

function soChanCuoiCung() {
  var bienSoChanCuoi = -1;
  for (var i = themSo.length - 1; i >= 0; i--) {
    if (themSo[i] % 2 == 0) {
      bienSoChanCuoi = themSo[i];
      break;
    }
  }

  document.querySelector("#hienThiSoChanCuoi").innerHTML = bienSoChanCuoi;
}
// 6. Đổi chỗ 2 giá trị trong mảng theo vị trí (Cho nhập vào 2 vị trí muốn đổi chỗ giá trị)

function doiViTri() {
  var viTri1 = document.getElementById("viTri1").value * 1;
  var viTri2 = document.getElementById("viTri2").value * 1;
  var hoanDoiViTri = themSo[viTri1 - 1];
  themSo[viTri1 - 1] = themSo[viTri2 - 1];
  themSo[viTri2 - 1] = hoanDoiViTri;
  document.querySelector("#hienThiViTri").innerHTML = themSo;
}

// 7. Sắp xếp mảng

function sapXep() {
  themSo.sort(function sapXep(a, b) {
    a = +a;
    b = +b;
    return a - b;
  });
  document.querySelector("#sapXepMang").innerHTML = themSo;
}

// 8. Tìm số nguyên tố đầu tiên trong mảng

function timSoNguyenTo() {
  var soNguyenTo = -1;
  for (var i = 0; i <= themSo.length - 1; i++) {
    if (themSo[i] > 1 && themSo[i] % 2 != 0) {
      soNguyenTo = themSo[i];
      break;
    }
  }
  document.querySelector("#hienThiSoNguyenToDauTien").innerHTML = soNguyenTo;
}

// 9. Thêm mảng mới, tìm xem có bao nhiêu số nguyên trong mảng này
function themMang() {
  var themMangMoi = document.getElementById("themMangMoi").value * 1;
  mangSoThuc.push(themMangMoi);
  document.querySelector("#hienThiMangVuaTHem").innerHTML = mangSoThuc;
}
function demSoNguyen() {
  var demSoNguyenTrongMang = 0;
  for (var i = 0; i <= mangSoThuc.length; i++) {
    if (typeof mangSoThuc[i] == "number") {
      demSoNguyenTrongMang++;
    }
  }
  document.querySelector("#hienThiSoNguyen").innerHTML = demSoNguyenTrongMang;
}
// 10. So sánh số âm và số dương

function soSanh() {
  var soDuong = 0;
  for (var i = 0; i <= themSo.length; i++) {
    if (themSo[i] > 0) {
      soDuong++;
      console.log(soDuong);
    }
  }
  var soAm = 0;
  for (var i = 0; i <= themSo.length; i++) {
    if (themSo[i] < 0) {
      soAm++;
      console.log(soAm);
    }
  }
  if (soDuong > soAm) {
    document.querySelector("#soSanhAmDuong").innerHTML = "Số dương > Số âm";
  } else if (soDuong < soAm) {
    document.querySelector("#soSanhAmDuong").innerHTML = "Số dương < Số âm";
  } else {
    document.querySelector("#soSanhAmDuong").innerHTML = "Số dương = Số âm";
  }
}
