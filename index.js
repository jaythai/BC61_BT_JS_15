// bài tâp 1
document.querySelector(".bt1 button").onclick = function () {
    var diemChuan = document.getElementById("diemChuan").value *1;
    var khuVuc = document.getElementById("khuVuc").value *1;
    var doiTuong = document.getElementById("doiTuong").value *1;
    var diemMonThu1 = document.getElementById("diemMonThu1").value *1;
    var diemMonThu2 = document.getElementById("diemMonThu2").value *1;
    var diemMonThu3 = document.getElementById("diemMonThu3").value *1;

    if (diemChuan < 0 || diemChuan > 30) {
        alert("Điểm chuẩn không hợp lệ !!");
    } else if (diemMonThu1 < 0 || diemMonThu1 > 10) {
        alert("Điểm môn thứ nhất không hợp lệ !!");
    } else if (diemMonThu2 < 0 || diemMonThu2 > 10) {
        alert("Điểm môn thứ hai không hợp lệ !!");
    } else if (diemMonThu3 < 0 || diemMonThu3 > 10) {
        alert("Điểm môn thứ không hợp lệ !!");
    } else {
        var tong = khuVuc + doiTuong + diemMonThu1 + diemMonThu2 + diemMonThu3;
        if (
            tong >= diemChuan &&
            diemMonThu1 != 0 &&
            diemMonThu2 != 0 &&
            diemMonThu3 != 0
        ) {
            document.querySelector(".bt1 #ketQua1 span").innerHTML = `${tong} 
            <i class="fa-solid fa-hand-point-right text-warning mx-5"></i> 
            <span class="text-success">Bạn đã đậu !!</span`;
        } else {
            document.querySelector(".bt1 #ketQua1 span").innerHTML = `${tong} 
            <i class="fa-solid fa-hand-point-right text-warning mx-5"></i> 
            <span class="text-success">Bạn đã rớt !!</span`;
        }
    }
    console.log(tong);
};

// Bài tập 2
document.querySelector(".bt2 button").onclick = function () {
    var hoTen = document.getElementById("hoTen").value ;
    var kW = document.getElementById("kW").value *1;

    if (kW == 0 || kW < 0) {
        alert("số kW không hợp lệ");
    } else {
        if (kW <= 50) {
            var hoaDonTienDien = kW * 500;
        } else if (50 < kW && kW <= 100) {
            var hoaDonTienDien = 50 * 500 + (kW -50) * 650;
        } else if (100 < kW && kW <= 200) {
            var hoaDonTienDien = 50 * 500 + 50 * 650 + (kW -100) * 850;
        } else if (200 < kW && kW <=350) {
            var hoaDonTienDien = 50 * 500 + 50 * 650 + 100 * 850 + (kW - 200) * 1100;
        } else {
            var hoaDonTienDien = 50 * 500 + 50 * 650 + 100 * 850 + 150 * 1100 + (kW - 350) * 1300;
        }
        var ketQuaBai2 = hoaDonTienDien.toLocaleString({
            style: "currency",
            currency: "VNĐ",
        }) + "VNĐ";

        document.querySelector(".bt2 #ketQua2 span:nth-child(2)").innerHTML = hoTen;
        document.querySelector(".bt2 #ketQua2 span:nth-child(6)").innerHTML = ketQuaBai2;
    }
    console.log(hoaDonTienDien); 
};

// Bài tập 3
document.querySelector(".bt3 button").addEventListener("click", function () {
    var hoVaTen = document.getElementById("hoVaTen").value;
    var tongThuNhapNam = document.getElementById("tongThuNhapNam").value *1;
    var nguoiPhuThuoc = document.getElementById("nguoiPhuThuoc").value *1;

    if (tongThuNhapNam <= 12000000) {
        alert("Tổng thu nhập hàng năm không hợp lệ !!");
    } else if (nguoiPhuThuoc<0) {
        alert("Số người phụ thuộc không hợp lệ !!");
    } else {
        var thuNhapTruocThue = tongThuNhapNam - 4e+6 - nguoiPhuThuoc * 1600000;
        if (tongThuNhapNam <= 6e+7) {
            var thue = (thuNhapTruocThue * 5) / 100;
        } else if (thuNhapTruocThue > 6e+7 && thuNhapTruocThue <= 12e+7) {
            var thue = (thuNhapTruocThue * 10) / 100;
        } else if (thuNhapTruocThue > 12e+7 && thuNhapTruocThue <= 21e+7) {
            var thue = (thuNhapTruocThue * 15) / 100;
        } else if (thuNhapTruocThue > 21e+7 && thuNhapTruocThue <= 384e+6) {
            var thue = (thuNhapTruocThue * 20) / 100;
        } else if (thuNhapTruocThue > 384e+6 && thuNhapTruocThue <= 624e+6) {
            var thue = (thuNhapTruocThue * 25) / 100;
        } else if (thuNhapTruocThue > 624e+6 && thuNhapTruocThue <= 96e+7) {
            var thue = (thuNhapTruocThue * 30) / 100;
        } else {
            var thue = (thuNhapTruocThue * 35) / 100; 
        }
        var ketQuaThue = thue.toLocaleString({
            style: "currency",
            currency: "VND",
            maximumFractionDigits: 2,
        })+ "VNĐ";
        document.querySelector(".bt3 #ketQua3 span:nth-child(2)").innerHTML = hoVaTen;
        document.querySelector(".bt3 #ketQua3 span:nth-child(6)").innerHTML = ketQuaThue;
    }
    console.log(ketQuaThue);
});