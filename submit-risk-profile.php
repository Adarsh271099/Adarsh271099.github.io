<?php
// Simple Risk Profiling Scoring System
$name = $_POST['name'];
$age = $_POST['age'];
$occupation = $_POST['occupation'];

$income = (int)$_POST['income'];
$objective = (int)$_POST['objective'];
$reaction = (int)$_POST['reaction'];
$horizon = (int)$_POST['horizon'];
$savings = (int)$_POST['savings'];
$volatility = (int)$_POST['volatility'];

$totalScore = $income + $objective + $reaction + $horizon + $savings + $volatility;

// Risk Category
if ($totalScore <= 9) {
    $category = "Conservative Risk Investor";
} elseif ($totalScore <= 14) {
    $category = "Moderate Risk Investor";
} else {
    $category = "Aggressive Risk Investor";
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Risk Profile Result</title>
    <style>
        body {
            font-family: sans-serif;
            padding: 20px;
            background: #f0f0f0;
            text-align: center;
        }
        .result-box {
            background: #fff;
            border-radius: 10px;
            padding: 30px;
            max-width: 500px;
            margin: 50px auto;
            box-shadow: 0 0 15px rgba(0,0,0,0.1);
        }
        h2 {
            color: #007bff;
        }
        .category {
            font-size: 1.5em;
            margin-top: 20px;
            color: #333;
        }
        .brand {
            margin-top: 30px;
            font-size: 0.9em;
            color: #888;
        }
        .whatsapp {
            margin-top: 20px;
        }
    </style>
</head>
<body>

<div class="result-box">
    <h2>Thank you, <?= htmlspecialchars($name) ?>!</h2>
    <p>Based on your inputs,</p>
    <div class="category"><strong>You are a <?= $category ?></strong></div>

    <div class="brand">
        SEBI Reg. No.: INA000019789<br>
        <img src="logo.png" alt="Logo" width="100">
    </div>

    <!-- Uncomment below to redirect to WhatsApp -->
    <!--
  <div class="whatsapp">
    <a href="https://wa.me/919130997271?text=Hi, I am <?= urlencode($name) ?> and I got '<?= urlencode($category) ?>' as my risk profile!" target="_blank">
      <button>Send to WhatsApp</button>
    </a>
  </div>
  -->
</div>

</body>
</html>
