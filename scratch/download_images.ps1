$destDir = "c:\Airtronics\public\images\services"
if (!(Test-Path $destDir)) {
    New-Item -ItemType Directory -Force -Path $destDir | Out-Null
}

$images = [ordered]@{
  'ac-installation.jpg' = 'https://images.openai.com/static-rsc-4/pzMcG5o9OAc_OhBaNrzoh98lFZOq2qDibs81sD3AzOLdlGjbzdIK5XJ9QeTIjqxqLf7VIGFad5vEpHu34RFsT8dALLWV-v5ZRphT4Z74BSQu0v6Pp_j9DWUqs9c04JHvoJOVuKiLeQvXHxyjd_lBj-d4tjL_8IDiq-Lk6IzHlMU?purpose=inline'
  'ac-servicing.jpg' = 'https://images.openai.com/static-rsc-4/ChQwFK_UICzuoG7Y-tyl47HIhl7RQ0j3GJpRJtzaDm2dL-GUE6fdYyzxIu5MQURtB6OGuHnZs2mmdY1XFoBgXxHQIXVFfmJf4u8YTGrCBjG6-8sWSrqm-e9rc5csrIdVRw9K6BkIPr7WEU4eroLiHfs3JeeEGexk2qFKJGHWMJQ?purpose=inline'
  'refrigerant-gas.jpg' = 'https://images.openai.com/static-rsc-4/kumFXTAFSV69CTML29Djjxd9W151v7SXGbDW4uI-oAhOoYPaF6xBzZ-sVkmx9K8MqbL2C3qhnLolJzEuGzmFoeaile4KdlHrzV0Wx2pfs4cSFbUtmhJ0IoKEa_HjiGAIUsHkLTQCWp6BX2PCwcdEUYJ1qMVZ23MArzvgoTA6AXA?purpose=inline'
  'water-leakage.jpg' = 'https://images.openai.com/static-rsc-4/iJhq6-v9Wfl_7H9-uVpnyCrEQ_SpdUs2WEVsNp9YHpBKx6kaMKrcfuKgz3ahxKHzPyZkNKELow8OKx2kplysU40r1ULSVMC32jt85HDFzg6sp2_V9_hG1Om_3tVu5cXW6f1eFz8xkyfgVRS17kEHpPtqmu51jp3buFOg2sEC498?purpose=inline'
  'parts-replacement.jpg' = 'https://images.openai.com/static-rsc-4/g_vMd-BiRLXK3VnFnCx4mGp6iprS6g7uYjJLVt9C49NT37sz_y8BEfHBA1HHCvalnSII773k3pBO3tE80fCFKgGavPrGyreW-zPo9T0zMihmOISW_2bfJZBgG6iO3wmsoilWN5spB0kqX6DloOIq50kvEMSMxpEYNKfCul-2SNs?purpose=inline'
  'vrf-vrv.jpg' = 'https://images.openai.com/static-rsc-4/p6WCQT9Yi4-F5Jb-S6EkCGjJDY0JGrd09Hcc_a7YsiLFaE_QCGz9gQFgba8HrspqP8kTFsmo4StEoxsPWV59MlqDDxQh_mnPnYOCRqSsJVSv9kuCQ1OhPn7E3Eu9C7cbM7F3fuXre52V6GwaQS8s__fIj-qf8RpGzz85VbaQp3s?purpose=inline'
  'ahu-fahu-fcu.jpg' = 'https://images.openai.com/static-rsc-4/bNMTxw5mh1BvgnrasnhCGTYQT8YH9wbKqCCQn5kBBktrR8Fm6Ez0cDci1qBLEiy73Tgj6qr3IaFRKwuWaxUmUJz7knikQFn7o2hL29qCFxWAxhDeEhqIFQgA8b689-AgRalKxXuKhf-PoPXonPow60hSO-IeqQLB3kmoVKu51Rw?purpose=inline'
  'chiller-systems.jpg' = 'https://images.openai.com/static-rsc-4/c6eZwxuOThsARxeerWSJz6_x9dFaLQ-9hUgytRGQex9-pXT_lvq_eC8fw7fQOPDfOHonSaX30sykppS0R87OUL1LMSTAI-xubtUtgQ0jfRqBbL77zAr9czxrDEYqPZciCayWzLy6YppOdnALzNo1fYm67SVLLVu6j44x_RwCdHE?purpose=inline'
  'ventilation-exhaust.jpg' = 'https://images.openai.com/static-rsc-4/Nfzy-wqzQZ6mXVwCuiVVHIIwx-ZZnS7q0LvzFtIZ4U0tmb_k40FDQ6xwC10qc1MSExwVdfgGF9VMRyB5klQWVr6no-35QN72l8KPpZpqZ72eZD-xW6ZtxueD9yMr9TPPpgwIVS2P03eBsThPuQMzePSmdW0mkojP0jY3FKHz88eueEvduF9BX04djfFuc9iJ?purpose=inline'
  'duct-fabrication.jpg' = 'https://images.openai.com/static-rsc-4/8Xvo7CgZCaympCJy_bYziX6IXmnPwlYYgXY1JFRuWv_VX-yTh19EL6LvAr_pnwgeSb2nYzIwD-mr1Uv42MyEJDXeh9VjDVQhVDNWTzBSiFDnaA0elD9S2q1AvKClmGiSDoCkMckn29VHOg3ff1eEyBlxruaWJ7hCzWRMtCHcL2c?purpose=inline'
  'thermostat-bms.jpg' = 'https://images.openai.com/static-rsc-4/jqYytYVVoCi7zDfjKHdIc47nFBqwFQ-I2K6nPAbkWh--mmOOVE64X9J5wJohblZj9Eo486ZiZ4Osm55hvp282_Q54H_eZ-IUJ1mB5nkCtUSCmM4Od24O_pWnvHJBg2ug5wwGh0fauuI3TzrjheO5BA56_KI_M3THn2e8gxCjyNE?purpose=inline'
  'testing-balancing.jpg' = 'https://images.openai.com/static-rsc-4/b3TVBNGfwvJ15hGNvMieBDJJYB72xDlTIsDcHQq7_f6PgDNWhnky3zojXju5KkebePK83GQ-sdh-wiznuwDL44oxauDNsFYxnJpvw7ygw7p31RGhjDnAtSS04_ZCaoO2WD_PBW4kHS1QIbI_WK6O7fbVmqrwal1SfiVc7tT0Kag?purpose=inline'
  'server-room-cooling.jpg' = 'https://images.openai.com/static-rsc-4/LQ7RjIExstnzgDeoJ_rAuDJYoDlm4N9skXVh01R3mOAQqigEwPaKYC5BVP8YjA31gwAELKE5FenbUEzadQ2h7hzLfBBdp8u_T1KRetXM--IjyKpmzXTG8OZbptRQBh4DgIXxba1qfthWq3yIbLxhehnqskO2IceUfHMpQ5cp43Y?purpose=inline'
  'commercial-refrigeration.jpg' = 'https://images.openai.com/static-rsc-4/M6Y_h-TzHscQ9SVPmOGegAA_heJ8WNCk41S-pIV9hgpth66C2OUrmfDHANkPexpf-hlFPQ_Cm7MBnrsiqiB2zE7cOx5WmJqKrkA-hr68SIMc4qZ_OO8xUbdt5QSsoVlIjk0XjtX0VXSRVEhTTfcBv33pTgLkd6ZgF9PUF88atgA?purpose=inline'
  'indoor-air-quality.jpg' = 'https://images.openai.com/static-rsc-4/fRYNnvcMxCyANXOOJCjuY0cEornGvTt7fWKYgYfhfmwR36s7sEf3i1KLTqXAo2U2QtnFbjvz9dKHD7loKBlVm3KO9OT3r8x-ehA8mshQmtjd_c6XcZ0wKSNNN2ug_iDSHobcD0SUSmOq-wgtLG8P4P30dlVJpvWWwTtY8BxyUc0?purpose=inline'
  'energy-efficiency.jpg' = 'https://images.openai.com/static-rsc-4/-KZ48SER5iq-cVl-Rool-CrRB0_x41eogO7YaAQ04uQ1EXa5PefR9ymPXAdbidsAw7gEyi13VNhTuU5O8SUVodYyPcZv8-h3dqaXxZI4vVsTBx59b9qoqMtgEmrHteUJaqyPEL2cLJ3porW9UPCIaVUL_YT6m--y_eP-YfC-I2U?purpose=inline'
  'packaged-rooftop.jpg' = 'https://images.openai.com/static-rsc-4/VnPcNiVb5PGqLn3Zs_7UPZSi8uIjXVaOyQXuBj9pVV-eoZniOskEfsqmVXQIYdC1Zw_XVnHN2baRzMXYLtKXS1q-R8ueBCALNfCqmfQkF8SKyfK16H6NIzW9VfOI5T6rn9jj1BnZPjO9X7Xj8RnMQw8EGF6QE2VcP01cq6ODtSA?purpose=inline'
}

foreach ($item in $images.GetEnumerator()) {
    $outPath = Join-Path $destDir $item.Key
    Write-Host "Fetching $($item.Key)..."
    try {
        Invoke-WebRequest -Uri $item.Value -OutFile $outPath -TimeoutSec 20
        Write-Host "Success: $($item.Key) ($((Get-Item $outPath).Length) bytes)"
    } catch {
        Write-Warning "Failed $($item.Key): $_"
    }
}

Copy-Item "c:\Airtronics\public\images\ac_cassette_installation.jpg" -Destination (Join-Path $destDir "hvac-design-consultancy.jpg") -Force
Write-Host "Done downloading service images."
