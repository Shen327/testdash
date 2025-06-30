
    document.addEventListener("DOMContentLoaded", function () {
      const saveBtn = document.getElementById("save-equipment");
      if (saveBtn) {
        saveBtn.addEventListener("click", saveEquipments);
      }
    });

    function showTab(tab) {
      const tabs = document.querySelectorAll('.tab');
      tabs.forEach(t => t.classList.add('hidden'));
      const selected = document.getElementById(`${tab}-tab`);
      if (selected) selected.classList.remove('hidden');
    }

    function toggleForm(formId, header) {
      console.log("Toggling form:", formId);
      const form = document.getElementById(formId);
      const arrow = header.querySelector('.arrow-icon');
      if (form) {
        const isHidden = form.classList.toggle('hidden');
        if (arrow) {
          arrow.classList.toggle('arrow-rotate', !isHidden);
        }
      }
    }
    
    function filterTable(tableId, query) {
      const table = document.getElementById(tableId);
      const rows = table.querySelectorAll("tbody tr");
      const lowerQuery = query.toLowerCase();
    
      rows.forEach(row => {
        const text = row.textContent.toLowerCase();
        row.style.display = text.includes(lowerQuery) ? "" : "none";
      });
    }

    function saveInstallation() {
      const contractno = document.getElementById('installation-contractno').value;
      const date = document.getElementById('installation-date')?.value || ""; // fallback if missing
      const type = document.getElementById('installation-type').value;
      const client = document.getElementById('installation-client').value;
      const company = document.getElementById('installation-company').value;
      const address = document.getElementById('installation-address').value;
      const postcode = document.getElementById('installation-postcode').value;
      const phonenumber = document.getElementById('installation-phonenumber').value;
      const email = document.getElementById('installation-email').value;
      const picname = document.getElementById('installation-picname').value;
      const picphonenumber = document.getElementById('installation-picphonenumber').value;
      const picemail = document.getElementById('installation-picemail').value;
      let bond = '';
        if (document.getElementById('installation-bond-bank').checked) {
          bond = 'Bank Guarantee';
        } else if (document.getElementById('installation-bond-director').checked) {
          bond = 'Director Guarantee';
        }
      let insuranceType = '';
      let insuranceProvider = '';
        if (document.getElementById('installation-car').checked) {
          insuranceType = 'CAR';
        } else if (document.getElementById('installation-ear').checked) {
        insuranceType = 'EAR';
        } else if (document.getElementById('installation-public').checked) {
        insuranceType = 'Public Liability';
        } else if (document.getElementById('installation-workman').checked) {
        insuranceType = 'Workman Compensation';
        }
        if (insuranceType !== 'Workman Compensation') {
          if (document.getElementById('installation-main').checked) {
            insuranceProvider = 'Main Contractor';
          } else if (document.getElementById('installation-trident').checked) {
            insuranceProvider = 'Trident';
          }
        }
      const ladAmount = document.getElementById('installation-lad-amount').value;
      const ladLimit = document.getElementById('installation-lad-limit').value;
      const dlpDuration = document.getElementById('installation-dlp-duration').value;
      const dlpOthers = document.getElementById('installation-dlp-other').value;
      const equipSummary = document.getElementById('installation-equipsummary').value;
      const equipOthers = document.getElementById('installation-equipothers').value;
      const commencementdate = document.getElementById('installation-commencementdate').value;
      const completiondate = document.getElementById('installation-completiondate').value;
      const pricesummary = document.getElementById('installation-pricesummary').value;
      const downpayment = document.getElementById('installation-downpayment').value;
      const retention = document.getElementById('installation-retention').value;
      const vo = document.getElementById('installation-vo').value;
      const tableBody = document.querySelector('#installation-list tbody');
      const row = document.createElement('tr');
      row.innerHTML = `
        <td>${contractno}</td>
        <td>${date}</td>
        <td>${type}</td>
        <td>${client}</td>
        <td>${company}</td>
        <td>${address}</td>
        <td>${postcode}</td>
        <td>${phonenumber}</td>
        <td>${email}</td>
        <td>${picname}</td>
        <td>${picphonenumber}</td>
        <td>${picemail}</td>
        <td>${bond}</td>
        <td>${insuranceType}</td>
        <td>${insuranceProvider}</td>
        <td>${ladAmount}</td>
        <td>${ladLimit}</td>
        <td>${dlpDuration}</td>
        <td>${dlpOthers}</td>
        <td>${equipSummary}</td>
        <td>${equipOthers}</td>
        <td>${commencementdate}</td>
        <td>${completiondate}</td>
        <td>${pricesummary}</td>
        <td>${downpayment}</td>
        <td>${retention}</td>
        <td>${vo}</td>`;
      tableBody.appendChild(row);
    }

    document.querySelectorAll('input[name="installation-instype"]').forEach(input => {
      input.addEventListener('change', () => {
        const showProviders = ['installation-car', 'installation-ear', 'installation-public'].includes(input.id);
        document.getElementById('installation-provider-group').style.display = showProviders ? 'block' : 'none';
      });
    });

    function saveModernization() {
      const contractno = document.getElementById('modernization-contractno').value;
      const date = document.getElementById('modernization-date')?.value || ""; // fallback if missing
      const type = document.getElementById('modernization-type').value;
      const client = document.getElementById('modernization-client').value;
      const company = document.getElementById('modernization-company').value;
      const address = document.getElementById('modernization-address').value;
      const postcode = document.getElementById('modernization-postcode').value;
      const phonenumber = document.getElementById('modernization-phonenumber').value;
      const email = document.getElementById('modernization-email').value;
      const picname = document.getElementById('modernization-picname').value;
      const picphonenumber = document.getElementById('modernization-picphonenumber').value;
      const picemail = document.getElementById('modernization-picemail').value;
      let bond = '';
        if (document.getElementById('modernization-bond-bank').checked) {
          bond = 'Bank Guarantee';
        } else if (document.getElementById('modernization-bond-director').checked) {
          bond = 'Director Guarantee';
        }
      let insuranceType = '';
      let insuranceProvider = '';
        if (document.getElementById('modernization-car').checked) {
          insuranceType = 'CAR';
        } else if (document.getElementById('modernization-ear').checked) {
        insuranceType = 'EAR';
        } else if (document.getElementById('modernization-public').checked) {
        insuranceType = 'Public Liability';
        } else if (document.getElementById('modernization-workman').checked) {
        insuranceType = 'Workman Compensation';
        }
        if (insuranceType !== 'Workman Compensation') {
          if (document.getElementById('modernization-main').checked) {
            insuranceProvider = 'Main Contractor';
          } else if (document.getElementById('modernization-trident').checked) {
            insuranceProvider = 'Trident';
          }
        }
      const ladAmount = document.getElementById('modernization-lad-amount').value;
      const ladLimit = document.getElementById('modernization-lad-limit').value;
      const dlpDuration = document.getElementById('modernization-dlp-duration').value;
      const dlpOthers = document.getElementById('modernization-dlp-other').value;
      const equipSummary = document.getElementById('modernization-equipsummary').value;
      const equipOthers = document.getElementById('modernization-equipothers').value;
      const commencementdate = document.getElementById('modernization-commencementdate').value;
      const completiondate = document.getElementById('modernization-completiondate').value;
      const pricesummary = document.getElementById('modernization-pricesummary').value;
      const downpayment = document.getElementById('modernization-downpayment').value;
      const retention = document.getElementById('modernization-retention').value;
      const vo = document.getElementById('modernization-vo').value;
      const tableBody = document.querySelector('#modernization-list tbody');
      const row = document.createElement('tr');
      row.innerHTML = `
        <td>${contractno}</td>
        <td>${date}</td>
        <td>${type}</td>
        <td>${client}</td>
        <td>${company}</td>
        <td>${address}</td>
        <td>${postcode}</td>
        <td>${phonenumber}</td>
        <td>${email}</td>
        <td>${picname}</td>
        <td>${picphonenumber}</td>
        <td>${picemail}</td>
        <td>${bond}</td>
        <td>${insuranceType}</td>
        <td>${insuranceProvider}</td>
        <td>${ladAmount}</td>
        <td>${ladLimit}</td>
        <td>${dlpDuration}</td>
        <td>${dlpOthers}</td>
        <td>${equipSummary}</td>
        <td>${equipOthers}</td>
        <td>${commencementdate}</td>
        <td>${completiondate}</td>
        <td>${pricesummary}</td>
        <td>${downpayment}</td>
        <td>${retention}</td>
        <td>${vo}</td>`;
      tableBody.appendChild(row);
    }

    document.querySelectorAll('input[name="modernization-instype"]').forEach(input => {
      input.addEventListener('change', () => {
        const showProviders = ['modernization-car', 'modernization-ear', 'modernization-public'].includes(input.id);
        document.getElementById('modernization-provider-group').style.display = showProviders ? 'block' : 'none';
      });
    });
    
    function saveContract() {
      const no = document.getElementById('contracts-no').value;
      const date = document.getElementById('contracts-date').value;
      const expiry = document.getElementById('contracts-expiry').value;
      const type = document.getElementById('contracts-type').value;
      const included = document.getElementById('contracts-included').value;
      const excluded = document.getElementById('contracts-excluded').value;
      const price = document.getElementById('contracts-price').value;
      
      const tableBody = document.querySelector('#contracts-list tbody');
      const row = document.createElement('tr');
      row.innerHTML = `
      <td>${no}</td><td>${date}</td><td>${expiry}</td><td>${type}</td><td>${included}</td><td>${excluded}</td><td>${price}</td>`;
      tableBody.appendChild(row);
    }

    function saveClient() {
      const clientsname = document.getElementById('clients-name').value;
      const clientsrole = document.getElementById('clients-type').value;
      const clientsaddress = document.getElementById('clients-address').value;
      const clientspostcode = document.getElementById('clients-postcode').value;
      const clientsphonenumber = document.getElementById('clients-phonenumber').value;
      const clientsemail = document.getElementById('clients-email').value;
      const clientspicname = document.getElementById('clients-pic-name').value;
      const clientspicphonenumber = document.getElementById('clients-pic-phonenumber').value;
      const clientspicemail = document.getElementById('clients-pic-email').value;
      const billingInputs = document.querySelectorAll('#clients-billing-fields input');
      const clientsbillingAddress = billingInputs[0].value;
      const clientsbillingPostcode = billingInputs[1].value;
      const clientsbillingTel = billingInputs[2].value;
      const clientsbillingEmail = billingInputs[3].value;
      const ownerInputs = document.querySelectorAll('#clients-owner-fields input');
      const clientsownerAddress = ownerInputs[0].value;
      const clientsownerPostcode = ownerInputs[1].value;
      const clientsownerTel = ownerInputs[2].value;
      const clientsownerEmail = ownerInputs[3].value;
      const pricing = ""; 
      const tableBody = document.querySelector('#clients-list tbody');
      const row = document.createElement('tr');
      row.innerHTML = `
        <td>${clientsname}</td>
        <td>${clientsrole}</td>
        <td>${clientsaddress}</td>
        <td>${clientspostcode}</td>
        <td>${clientsphonenumber}</td>
        <td>${clientsemail}</td>
        <td>${clientspicname}</td>
        <td>${clientspicphonenumber}</td>
        <td>${clientspicemail}</td>
        <td>${clientsbillingAddress}</td>
        <td>${clientsbillingPostcode}</td>
        <td>${clientsbillingTel}</td>
        <td>${clientsbillingEmail}</td>
        <td>${clientsownerAddress}</td>
        <td>${clientsownerPostcode}</td>
        <td>${clientsownerTel}</td>
        <td>${clientsownerEmail}</td>
        <td>${pricing}</td>`;
      tableBody.appendChild(row);
    }

    function toggleClientsBillingAddress() {
      const checkbox = document.getElementById("clients-billing-same");
      const section = document.getElementById("clients-billing-fields");
      const customerAddress = document.getElementById("clients-address").value;
      const customerPostcode = document.getElementById("clients-postcode").value;
      const customerPhone = document.getElementById("clients-phonenumber").value;
      const customerEmail = document.getElementById("clients-email").value;
      const inputs = section.querySelectorAll("input");
      if (checkbox.checked) {
        inputs[0].value = customerAddress;
        inputs[1].value = customerPostcode;
        inputs[2].value = customerPhone;
        inputs[3].value = customerEmail;
        section.style.display = "none";
      } else {
        section.style.display = "block";
        inputs.forEach(input => input.value = "");
      }
    }

    function toggleClientsOwnerAddress() {
      const checkbox = document.getElementById("clients-owner-same");
      const section = document.getElementById("clients-owner-fields");
      const customerAddress = document.getElementById("clients-address").value;
      const customerPostcode = document.getElementById("clients-postcode").value;
      const customerPhone = document.getElementById("clients-phonenumber").value;
      const customerEmail = document.getElementById("clients-email").value;
      const inputs = section.querySelectorAll("input");
      if (checkbox.checked) {
        inputs[0].value = customerAddress;
        inputs[1].value = customerPostcode;
        inputs[2].value = customerPhone;
        inputs[3].value = customerEmail;
        section.style.display = "none";
      } else {
        section.style.display = "block";
        inputs.forEach(input => input.value = "");
      }
    }

    function saveSites() {
      const name = document.getElementById('site-name').value;
      const type = document.getElementById('site-type').value;
      const address = document.getElementById('site-address').value;
      const latitude = document.getElementById('site-latitude').value;
      const longtitude = document.getElementById('site-longtitude').value;

      const tableBody = document.querySelector('#sites-list tbody');
      const row = document.createElement('tr');
      row.innerHTML = `
      <td>${name}</td><td>${type}</td><td>${address}</td><td>${latitude}</td><td>${longtitude}</td>`;
      tableBody.appendChild(row);
    }

    function savePricingRow() {
      const table = document.querySelector("#pricing-table tbody");
      const row = document.createElement("tr");
      row.innerHTML = `
        <td><input type="text" placeholder="Unit No."></td>
        <td><input type="text" placeholder="PMA No."></td>
        <td><input type="number" value="0" step="0.01" onchange="calculateRow(this)"></td>
        <td style="text-align:center;">
          <input type="checkbox" onchange="calculateRow(this)">
        </td>
        <td class="row-total">0.00</td>
        <td><button onclick="this.parentElement.parentElement.remove(); updateGrandTotal();">🗑</button></td>
      `;
      table.appendChild(row);
      calculateRow(row.querySelector("input[type='number']")); // auto-calc new row
    }

    function calculateRow(input) {
      const row = input.closest("tr");
      const price = parseFloat(row.cells[2].querySelector("input").value) || 0;
      const includeSST = row.cells[3].querySelector("input").checked;
      const total = includeSST ? price * 1.08 : price;

      row.querySelector(".row-total").textContent = total.toFixed(2);
      updateGrandTotal();
      syncPricingToContracts();
    }

    function syncPricingToContracts() {
      const pricingRows = document.querySelectorAll("th");
      const pricingMap = {};

      pricingRows.forEach(row => {
        const pma = row.cells[1].querySelector("input").value.trim();
        const total = row.querySelector(".row-total").textContent.trim();
        if (pma) pricingMap[pma] = total;
      });

      const contractRows = document.querySelectorAll("#contracts-list tbody tr");
      contractRows.forEach(row => {
        const pmaCell = row.cells[8]; // adjust index to match PMA No. column
        const priceCell = row.cells[row.cells.length - 1]; // assuming last col = Monthly Price
        const pma = pmaCell?.textContent?.trim();
        if (pricingMap[pma]) {
          priceCell.textContent = pricingMap[pma];
        } else {
          priceCell.textContent = "–";
        }
      });
    }

    function saveEquipments() {
      const liftnumber = document.getElementById('equip-liftnumber').value;
      const oname = document.getElementById('equip-owner-name').value;
      const oworkplacenumber = document.getElementById('equip-owner-workplacenumber').value;
      const ocorrespondencesadd = document.getElementById('equip-owner-correspondencesadd').value;
      const rname = document.getElementById('equip-resident-name').value;
      const rworkplacenumber = document.getElementById('equip-resident-workplacenumber').value;
      const rcorrespondencesadd = document.getElementById('equip-resident-correspondencesadd').value;
      const lastinspec = document.getElementById('equip-lastinspec').value;
      const resnumber = document.getElementById('equip-resnumber').value;
      const expired = document.getElementById('equip-expired').value;
      const location = document.getElementById('equip-location').value;
      const serialnumber = document.getElementById('equip-serialnumber').value;
      const manufacture = document.getElementById('equip-manufacture').value;
      const rate = document.getElementById('equip-rate').value;
      const type = document.getElementById('equip-type').value;
      const brand = document.getElementById('equip-brand')?.value || '';
      const modelname = document.getElementById('equip-modelname')?.value || '';
      const capacitykg = document.getElementById('equip-capacitykg')?.value || '';
      const capacityper = document.getElementById('equip-capacityper')?.value || '';
      const speed = document.getElementById('equip-speed')?.value || '';
      const rise = document.getElementById('equip-rise')?.value || '';
      const stepwidth = document.getElementById('equip-stepwidth')?.value || '';
      const inclination = document.getElementById('equip-inclination')?.value || '';
      const so = document.getElementById('equip-so')?.value || '';
      const machinetype = document.getElementById('equip-machinetype')?.value || '';
      const motordata = document.getElementById('equip-motordata')?.value || '';
      const controller = document.getElementById('equip-controller')?.value || '';
      const softver = document.getElementById('equip-softver')?.value || '';
      const operation = document.getElementById('equip-operation')?.value || '';
      const roping = document.getElementById('equip-roping')?.value || '';
      const ropediameter = document.getElementById('equip-ropediameter')?.value || '';
      const ropeconstruction = document.getElementById('equip-ropeconstruction')?.value || '';
      const tableBody = document.querySelector('#equipment-list tbody');
      const row = document.createElement('tr');
      row.innerHTML = `
        <td>${liftnumber}</td>
        <td>${resnumber}</td>
        <td>${expired}</td>
        <td>${serialnumber}</td>
        <td>${rate}</td>`;
      tableBody.appendChild(row);
    }

    function toggleEquipmentFields(type) {
      const allSections = document.querySelectorAll('.equipment-details');
      allSections.forEach(section => section.classList.add('hidden'));
      if (type) {
        const section = document.getElementById(`${type}-fields`);
        if (section) section.classList.remove('hidden');
      }
    }

    function saveMaintenance() {
      const date = document.getElementById('maintenance-date').value;
      const freq = document.getElementById('maintenance-freq').value;
      const site = document.getElementById('maintenance-site').value;
      const pma = document.getElementById('maintenance-pma').value;
      const equipno = document.getElementById('maintenance-equipno').value;
      const team = document.getElementById('maintenance-team').value;
 
      const tableBody = document.querySelector('#maintenance-list tbody');
      const row = document.createElement('tr');
      row.innerHTML = `
      <td>${date}</td><td>${freq}</td><td>${site}</td><td>${pma}</td><td>${equipno}</td><td>${team}</td>`;
      tableBody.appendChild(row);
    }

    function saveNewinpec() {
      const date = document.getElementById('newinspec-date').value;
      const site = document.getElementById('newinspec-site').value;
      const pma = document.getElementById('newinspec-pma').value;
      const equipno = document.getElementById('newinspec-equipno').value;
      const comment = document.getElementById('newinspec-comment').value;
      const files = Array.from(document.getElementById('newinspec-image').files);
      const tableBody = document.querySelector('#newinspec-list tbody');
      const row = document.createElement('tr');

      if (files.length === 0) {
        row.innerHTML = `
          <td>${date}</td><td>${site}</td><td>${pma}</td><td>${equipno}</td><td>${comment}</td><td>No image</td>`;
        tableBody.appendChild(row);
        return;
      }

      Promise.all(files.map(file => {
        return new Promise(resolve => {
          const reader = new FileReader();
          reader.onload = e => {
            const imgTag = `<img src="${e.target.result}" alt="Photo" onclick="zoomImage(this)">`;
            resolve(imgTag);
          };
          reader.readAsDataURL(file);
        });
      })).then(images => {
        row.innerHTML = `
          <td>${date}</td><td>${site}</td><td>${pma}</td><td>${equipno}</td><td>${comment}</td><td>${images.join(' ')}</td>`;
        tableBody.appendChild(row);

      if (comment.trim() !== '') {
        const repairTable = document.querySelector('#repair-list tbody');
        const repairRow = document.createElement('tr');
        repairRow.innerHTML = `
          <td>${date}</td>
          <td>${site}</td>
          <td>${pma}</td>
          <td>${equipno}</td>
          <td>${comment}</td>
          <td>${images.join(' ')}</td>`;
        repairTable.appendChild(repairRow);
      }
      });
    }

    function saveRenewinspec() {
      const date = document.getElementById('renewinspec-date').value;
      const site = document.getElementById('renewinspec-site').value;
      const pma = document.getElementById('renewinspec-pma').value;
      const equipno = document.getElementById('renewinspec-equipno').value;
      const comment = document.getElementById('renewinspec-comment').value;
      const files = Array.from(document.getElementById('renewinspec-image').files);
      const tableBody = document.querySelector('#renewinspec-list tbody');
      const row = document.createElement('tr');

      if (files.length === 0) {
        row.innerHTML = `
          <td>${date}</td><td>${site}</td><td>${pma}</td><td>${equipno}</td><td>${comment}</td><td>No image</td>`;
        tableBody.appendChild(row);
        return;
      }

      Promise.all(files.map(file => {
        return new Promise(resolve => {
          const reader = new FileReader();
          reader.onload = e => {
            const imgTag = `<img src="${e.target.result}" alt="Photo" onclick="zoomImage(this)">`;
            resolve(imgTag);
          };
          reader.readAsDataURL(file);
        });
      })).then(images => {
        row.innerHTML = `
          <td>${date}</td><td>${site}</td><td>${pma}</td><td>${equipno}</td><td>${comment}</td><td>${images.join(' ')}</td>`;
        tableBody.appendChild(row);

      if (comment.trim() !== '') {
        const repairTable = document.querySelector('#repair-list tbody');
        const repairRow = document.createElement('tr');
        repairRow.innerHTML = `
          <td>${date}</td>
          <td>${site}</td>
          <td>${pma}</td>
          <td>${equipno}</td>
          <td>${comment}</td>
          <td>${images.join(' ')}</td>`;
        repairTable.appendChild(repairRow);
      }
      });
    }

    function saveQuaterinspec() {
      const date = document.getElementById('quaterinspec-date').value;
      const site = document.getElementById('quaterinspec-site').value;
      const pma = document.getElementById('quaterinspec-pma').value;
      const equipno = document.getElementById('quaterinspec-equipno').value;
      const comment = document.getElementById('quaterinspec-comment').value;
      const files = Array.from(document.getElementById('quaterinspec-image').files);

      const tableBody = document.querySelector('#quaterinspec-list tbody');
      const row = document.createElement('tr');

      if (files.length === 0) {
        row.innerHTML = `
          <td>${date}</td><td>${site}</td><td>${pma}</td><td>${equipno}</td><td>${comment}</td><td>No image</td>`;
        tableBody.appendChild(row);
        return;
      }

      Promise.all(files.map(file => {
        return new Promise(resolve => {
          const reader = new FileReader();
          reader.onload = e => {
            const imgTag = `<img src="${e.target.result}" alt="Photo" onclick="zoomImage(this)">`;
            resolve(imgTag);
          };
          reader.readAsDataURL(file);
        });
      })).then(images => {
        row.innerHTML = `
          <td>${date}</td><td>${site}</td><td>${pma}</td><td>${equipno}</td><td>${comment}</td><td>${images.join(' ')}</td>`;
        tableBody.appendChild(row);

      if (comment.trim() !== '') {
        const repairTable = document.querySelector('#repair-list tbody');
        const repairRow = document.createElement('tr');
        repairRow.innerHTML = `
          <td>${date}</td>
          <td>${site}</td>
          <td>${pma}</td>
          <td>${equipno}</td>
          <td>${comment}</td>
          <td>${images.join(' ')}</td>`;
        repairTable.appendChild(repairRow);
      }
      });
    }

    function saveSafetyaudit() {
      const date = document.getElementById('safetyaudit-date').value;
      const site = document.getElementById('safetyaudit-site').value;
      const pma = document.getElementById('safetyaudit-pma').value;
      const equipno = document.getElementById('safetyaudit-equipno').value;
      const comment = document.getElementById('safetyaudit-comment').value;
      const files = Array.from(document.getElementById('safetyaudit-image').files);

      const tableBody = document.querySelector('#safetyaudit-list tbody');
      const row = document.createElement('tr');

      if (files.length === 0) {
        row.innerHTML = `
          <td>${date}</td><td>${site}</td><td>${pma}</td><td>${equipno}</td><td>${comment}</td><td>No image</td>`;
        tableBody.appendChild(row);
        return;
      }

      Promise.all(files.map(file => {
        return new Promise(resolve => {
          const reader = new FileReader();
          reader.onload = e => {
            const imgTag = `<img src="${e.target.result}" alt="Photo" onclick="zoomImage(this)">`;
            resolve(imgTag);
          };
          reader.readAsDataURL(file);
        });
      })).then(images => {
        row.innerHTML = `
          <td>${date}</td><td>${site}</td><td>${pma}</td><td>${equipno}</td><td>${comment}</td><td>${images.join(' ')}</td>`;
        tableBody.appendChild(row);

      if (comment.trim() !== '') {
        const repairTable = document.querySelector('#repair-list tbody');
        const repairRow = document.createElement('tr');
        repairRow.innerHTML = `
          <td>${date}</td>
          <td>${type}</td>
          <td>${site}</td>
          <td>${pma}</td>
          <td>${equipno}</td>
          <td>${comment}</td>
          <td>${images.join(' ')}</td>`;
        repairTable.appendChild(repairRow);
      }
      });
    }

    function saveQuataudit() {
      const date = document.getElementById('quataudit-date').value;
      const site = document.getElementById('quataudit-site').value;
      const pma = document.getElementById('quataudit-pma').value;
      const equipno = document.getElementById('quataudit-equipno').value;
      const comment = document.getElementById('quataudit-comment').value;
      const files = Array.from(document.getElementById('quataudit-image').files);

      const tableBody = document.querySelector('#quataudit-list tbody');
      const row = document.createElement('tr');

      if (files.length === 0) {
        row.innerHTML = `
          <td>${date}</td><td>${site}</td><td>${pma}</td><td>${equipno}</td><td>${comment}</td><td>No image</td>`;
        tableBody.appendChild(row);
        return;
      }

      Promise.all(files.map(file => {
        return new Promise(resolve => {
          const reader = new FileReader();
          reader.onload = e => {
            const imgTag = `<img src="${e.target.result}" alt="Photo" onclick="zoomImage(this)">`;
            resolve(imgTag);
          };
          reader.readAsDataURL(file);
        });
      })).then(images => {
        row.innerHTML = `
          <td>${date}</td><td>${site}</td><td>${pma}</td><td>${equipno}</td><td>${comment}</td><td>${images.join(' ')}</td>`;
        tableBody.appendChild(row);

      if (comment.trim() !== '') {
        const repairTable = document.querySelector('#repair-list tbody');
        const repairRow = document.createElement('tr');
        repairRow.innerHTML = `
          <td>${date}</td>
          <td>${site}</td>
          <td>${pma}</td>
          <td>${equipno}</td>
          <td>${comment}</td>
          <td>${images.join(' ')}</td>`;
        repairTable.appendChild(repairRow);
      }
      });
    }

    function zoomImage(img) {
      const modal = document.getElementById('image-modal');
      const modalImg = document.getElementById('modal-img');
      modalImg.src = img.src;
      modal.style.display = 'flex';
    }

    function closeModal() {
      document.getElementById('image-modal').style.display = 'none';
    }

    function saveService() {
      const date = document.getElementById('service-date').value;
      const sonum = document.getElementById('service-sonum').value;
      const site = document.getElementById('service-site').value;
      const pma = document.getElementById('service-pma').value;
      const equipno = document.getElementById('service-region').value;
      const packagetype = document.getElementById('service-packagetype').value;
      const type = document.getElementById('service-type').value;
      const descrip = document.getElementById('service-descrip').value;
      const qty = document.getElementById('service-qty').value;
      const suffix = document.getElementById('service-suffix').value;
      const equipstatus = document.getElementById('service-equipstatus').value;
 
      const tableBody = document.querySelector('#service-list tbody');
      const row = document.createElement('tr');
      row.innerHTML = `
      <td>${date}</td><td>${sonum}</td><td>${site}</td><td>${pma}</td><td>${equipno}</td><td>${packagetype}</td><td>${type}</td><td>${descrip}</td><td>${qty}</td><td>${suffix}</td><td>${equipstatus}</td>`;
      tableBody.appendChild(row);
    }

    function saveMNC() {
      const time = document.getElementById('mnc-time').value;
      const site = document.getElementById('mnc-site').value;
      const pma = document.getElementById('mnc-pma').value;
      const equipno = document.getElementById('mnc-equipno').value;
      const type = document.getElementById('mnc-type').value;
      const equipstatus = document.getElementById('mnc-equipstatus').value;
 
      const tableBody = document.querySelector('#mnc-list tbody');
      const row = document.createElement('tr');
      row.innerHTML = `
      <td>${time}</td><td>${site}</td><td>${pma}</td><td>${equipno}</td><td>${type}</td><td>${equipstatus}</td>`;
      tableBody.appendChild(row);
    }
  