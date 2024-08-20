from django.http import JsonResponse

def get_data(request):
    return JsonResponse({'message': 'Hello from Django!'})

def get_more_data(request):
    return JsonResponse({'info': 'This is another API endpoint'})