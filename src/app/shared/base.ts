export class BaseClass {
    alertMessage: string | null = null;
    alertType: string = 'alert-info';

    showAlert(message: string, type: string) {
        this.alertMessage = message;
        this.alertType = type;
    
        // Auto-hide after 3 seconds
        setTimeout(() => {
          this.alertMessage = null;
        }, 3000);
      }
}
