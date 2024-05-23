document.getElementById('submit').addEventListener('click', function() {
    const emergency = document.getElementById('emergency').value;
    const responseDiv = document.getElementById('response');
    responseDiv.innerHTML = ''; // Clear previous response

    if (!emergency) {
        responseDiv.innerHTML = '<div class="alert alert-danger"><i class="fas fa-exclamation-circle"></i> Please select an emergency.</div>';
        return;
    }

    // Determine the category of the emergency and provide instructions accordingly
    switch (emergency) {
        case 'heart_attack':
        case 'stroke':
        case 'severe_allergic_reaction':
        case 'choking':
        case 'severe_bleeding':
        case 'head_injury':
        case 'seizure':
        case 'shock':
        case 'cardiac_arrest':
        case 'chest_pain':
        case 'appendicitis':
        case 'acute_abdominal_pain':
        case 'pulmonary_embolism':
        case 'deep_vein_thrombosis':
        case 'spinal_injury':
        case 'eye_injury':
        case 'electric_shock':
        case 'animal_bites_and_stings':
        case 'fainting':
        case 'pneumothorax':
        case 'eclampsia':
            responseDiv.innerHTML = `
                <div class="alert alert-danger">
                    <i class="fas fa-phone-alt"></i> <strong>Emergency!</strong> This situation requires professional care. Please call <strong>999</strong> immediately.
                </div>
                <div class="alert alert-info">
                    <i class="fas fa-info-circle"></i> <h5>Steps to take while the ambulance is coming:</h5>
                    <ul>
                        <li>Ensure the person is in a safe environment.</li>
                        <li>Provide any necessary first aid if you are trained.</li>
                        <li>Stay with the person and keep them calm.</li>
                        <li>Follow any additional instructions from the emergency operator.</li>
                    </ul>
                </div>`;
            break;
        case 'burns':
            responseDiv.innerHTML = `
                <div class="alert alert-info">
                    <i class="fas fa-info-circle"></i> <h5>Steps to treat burns:</h5>
                    <ul>
                        <li>Remove the person from the source of the burn.</li>
                        <li>Cool the burn with cool (not cold) running water for at least 20 minutes.</li>
                        <li>Remove any clothing or jewelry near the burn area, but do not attempt to remove anything sticking to the burn.</li>
                        <li>Cover the burn with a sterile dressing or clean cloth.</li>
                        <li>Seek medical help if the burn is severe or covers a large area of the body.</li>
                    </ul>
                </div>`;
            break;
        case 'poisoning':
            responseDiv.innerHTML = `
                <div class="alert alert-info">
                    <i class="fas fa-info-circle"></i> <h5>Steps for suspected poisoning:</h5>
                    <ul>
                        <li>If the person is unconscious, having difficulty breathing, or having seizures, call <strong>999</strong> immediately.</li>
                        <li>If the person is conscious and alert, call the Poison Control Center or seek medical help.</li>
                        <li>Provide the Poison Control Center or medical professionals with information about the substance ingested, if known.</li>
                        <li>Do not induce vomiting unless instructed to do so by medical professionals.</li>
                    </ul>
                </div>`;
            break;
        case 'drug_overdose':
            responseDiv.innerHTML = `
                <div class="alert alert-info">
                    <i class="fas fa-info-circle"></i> <h5>Steps for suspected drug overdose:</h5>
                    <ul>
                        <li>If the person is unconscious, having difficulty breathing, or having seizures, call <strong>999</strong> immediately.</li>
                        <li>If the person is conscious and alert, stay with them and keep them calm until medical help arrives.</li>
                        <li>Provide information about the type and amount of drug taken to medical professionals.</li>
                        <li>Do not attempt to induce vomiting unless instructed to do so by medical professionals.</li>
                    </ul>
                </div>`;
            break;
        case 'diabetic_emergencies':
            responseDiv.innerHTML = `
                <div class="alert alert-info">
                    <i class="fas fa-info-circle"></i> <h5>Steps for diabetic emergencies:</h5>
                    <ul>
                        <li>If the person is unconscious or having a seizure, call <strong>999</strong> immediately.</li>
                        <li>If the person is conscious but experiencing symptoms of hypoglycemia (low blood sugar), give them sugar in the form of glucose tablets, fruit juice, or a sugary drink.</li>
                        <li>If the person is conscious but experiencing symptoms of hyperglycemia (high blood sugar), encourage them to drink water and seek medical help if necessary.</li>
                        <li>Monitor the person's condition and provide assistance as needed.</li>
                    </ul>
                </div>`;
            break;
        case 'drowning':
            responseDiv.innerHTML = `
                <div class="alert alert-info">
                    <i class="fas fa-info-circle"></i> <h5>Steps for drowning:</h5>
                    <ul>
                        <li>Remove the person from the water immediately, if possible.</li>
                        <li>Check for breathing and pulse. If the person is not breathing, start CPR.</li>
                        <li>If the person is breathing, place them in the recovery position and monitor their breathing and pulse.</li>
                        <li>Call <strong>999</strong> and continue to provide first aid until help arrives.</li>
                    </ul>
                </div>`;
            break;
        case 'heat_stroke':
            responseDiv.innerHTML = `
                <div class="alert alert-info">
                    <i class="fas fa-info-circle"></i> <h5>Steps for heat stroke:</h5>
                    <ul>
                        <li>Move the person to a cooler place and remove excess clothing.</li>
                        <li>Cool the person by spraying or sponging them with cool water and fanning them.</li>
                        <li>Have the person drink cool water if they are able to swallow.</li>
                        <li>Seek medical help immediately as heat stroke can be life-threatening.</li>
                    </ul>
                </div>`;
            break;
        case 'hypothermia':
            responseDiv.innerHTML = `
                <div class="alert alert-info">
                    <i class="fas fa-info-circle"></i> <h5>Steps for hypothermia:</h5>
                    <ul>
                        <li>Move the person to a warm place and remove any wet clothing.</li>
                        <li>Wrap the person in blankets or warm clothing, covering their head and neck.</li>
                        <li>Provide warm liquids to drink if the person is conscious and able to swallow.</li>
                        <li>Monitor the person's
                        <li>Monitor the person's condition and seek medical help if necessary.</li>
                    </ul>
                </div>`;
            break;
        default:
            responseDiv.innerHTML = '<div class="alert alert-warning"><i class="fas fa-exclamation-circle"></i> No instructions available for this emergency.</div>';
    }
});
