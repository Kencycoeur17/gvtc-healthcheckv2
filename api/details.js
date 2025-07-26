const express = require('express');
const router = express.Router();

// Simulons des certificats valides
const validCertificates = [
  { certificateNumber: "CERT-2024-001", accessCode: "ACCESS123", name: "Jean Paul", status: "Valid" },
  { certificateNumber: "FIA-HT-0001", accessCode: "FX456", name: "Mackendy Pierre", status: "Valid" },
  { certificateNumber: "MHU-001", accessCode: "TCI2025", name: "Kency Charles", status: "Expired" }
];

router.post('/', (req, res) => {
  const { certificateNumber, accessCode } = req.body;

  const found = validCertificates.find(cert =>
    cert.certificateNumber === certificateNumber.trim().toUpperCase() &&
    cert.accessCode === accessCode.trim()
  );

  if (found) {
    res.json({
      success: true,
      certificate: found
    });
  } else {
    res.status(404).json({
      success: false,
      message: "Certificat introuvable ou code incorrect."
    });
  }
});

module.exports = router;
