function thousandSeparator(id) {       

        // Get field value
        var field = document.getElementById(id);
        n = field.value;
        
        // Remove spaces, commas and non-digit characters
        n = n.replace(/\s+/g, '').replace(/,/g, '').replace(/[^0-9.]/g, '');
        
        // If there is several dots, ignore the second and later occurances
        if (n.indexOf('.') > -1) {
            n = n.split('.');
            // Limit amount of numbers after dot to two
            if (n[1].length > 2) n[1] = n[1].substring(0, 2);
            n = n[0] + '.' + n[1];
        }
        
        // Whole number (before dot)
        var w = Math.floor(n).toString();
        
        // Decimal number (after dot)
        var d = n % 1;
        if (d == 0) d = '';
        else d = '.' + Math.round(d * 100);
        
        // Add commas
        var c = '';
        for (var i = w.length - 3; i > 0; i -= 3) {
          c = ',' + w.substr(i, 3) + c; 
        }
        
        // Add new value to field 
        field.value = w.substr(0, i + 3) + c + d;
    }
