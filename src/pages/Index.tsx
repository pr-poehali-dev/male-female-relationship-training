import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Icon from '@/components/ui/icon';
import { format } from 'date-fns';
import { ru } from 'date-fns/locale';
import { toast } from 'sonner';

const Index = () => {
  const [date, setDate] = useState<Date>();
  const [sessionType, setSessionType] = useState('individual');
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!date) {
      toast.error('Пожалуйста, выберите дату');
      return;
    }
    toast.success('Спасибо! Ваша заявка отправлена. Я свяжусь с вами в ближайшее время.');
    setFormData({ name: '', phone: '', email: '', message: '' });
    setDate(undefined);
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen">
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-border">
        <nav className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-primary">Гармония отношений</h1>
            <div className="hidden md:flex gap-6">
              <button onClick={() => scrollToSection('hero')} className="text-foreground hover:text-primary transition-colors">Главная</button>
              <button onClick={() => scrollToSection('program')} className="text-foreground hover:text-primary transition-colors">Программа</button>
              <button onClick={() => scrollToSection('testimonials')} className="text-foreground hover:text-primary transition-colors">Отзывы</button>
              <button onClick={() => scrollToSection('about')} className="text-foreground hover:text-primary transition-colors">Обо мне</button>
              <button onClick={() => scrollToSection('booking')} className="text-foreground hover:text-primary transition-colors">Запись</button>
              <button onClick={() => scrollToSection('contacts')} className="text-foreground hover:text-primary transition-colors">Контакты</button>
            </div>
            <Button onClick={() => scrollToSection('booking')} className="bg-primary hover:bg-primary/90 text-foreground">
              Записаться
            </Button>
          </div>
        </nav>
      </header>

      <section id="hero" className="pt-32 pb-20 px-4 bg-gradient-to-br from-secondary/30 via-background to-muted/20">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <h2 className="text-5xl md:text-6xl font-bold text-foreground leading-tight">
                Тренинг отношений<br />
                <span className="text-primary">Мужчина и Женщина</span>
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Создайте гармоничные и счастливые отношения, основанные на взаимопонимании, доверии и любви
              </p>
              <div className="flex gap-4 pt-4">
                <Button onClick={() => scrollToSection('booking')} size="lg" className="bg-primary hover:bg-primary/90 text-foreground text-lg px-8">
                  Записаться на тренинг
                </Button>
                <Button onClick={() => scrollToSection('program')} size="lg" variant="outline" className="text-lg px-8">
                  Узнать больше
                </Button>
              </div>
            </div>
            <div className="relative animate-scale-in">
              <img 
                src="https://cdn.poehali.dev/projects/f80efb35-83e1-43df-b467-95af444ea670/files/f9d10eda-239a-48c5-a6cd-7bef1c07e1ce.jpg" 
                alt="Гармония отношений" 
                className="rounded-3xl shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="benefits" className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <h3 className="text-4xl font-bold text-center mb-16 text-foreground">Что вы получите</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: 'Heart', title: 'Глубокое понимание', description: 'Научитесь понимать потребности партнёра и выражать свои чувства' },
              { icon: 'Users', title: 'Здоровые границы', description: 'Установите баланс между близостью и личным пространством' },
              { icon: 'Sparkles', title: 'Новая энергия', description: 'Верните страсть и романтику в отношения' },
              { icon: 'MessageCircle', title: 'Эффективное общение', description: 'Освойте навыки конструктивного диалога без конфликтов' },
              { icon: 'Shield', title: 'Доверие и безопасность', description: 'Создайте пространство, где можно быть собой' },
              { icon: 'TrendingUp', title: 'Рост вместе', description: 'Развивайтесь как пара, поддерживая друг друга' }
            ].map((benefit, index) => (
              <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-shadow bg-gradient-to-br from-white to-secondary/10">
                <CardContent className="p-8 space-y-4">
                  <div className="w-16 h-16 rounded-2xl bg-primary/20 flex items-center justify-center">
                    <Icon name={benefit.icon} className="w-8 h-8 text-primary" />
                  </div>
                  <h4 className="text-xl font-semibold text-foreground">{benefit.title}</h4>
                  <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="program" className="py-20 px-4 bg-gradient-to-br from-muted/20 to-secondary/10">
        <div className="container mx-auto max-w-4xl">
          <h3 className="text-4xl font-bold text-center mb-6 text-foreground">Программа тренинга</h3>
          <p className="text-center text-muted-foreground mb-12 text-lg">8 модулей для трансформации ваших отношений</p>
          
          <Accordion type="single" collapsible className="space-y-4">
            {[
              {
                title: 'Модуль 1: Основы гармоничных отношений',
                duration: '2 часа',
                content: 'Разберём фундаментальные принципы счастливых отношений. Изучим мужскую и женскую психологию, научимся видеть различия как силу пары.'
              },
              {
                title: 'Модуль 2: Язык любви и потребности',
                duration: '2 часа',
                content: 'Откроем 5 языков любви. Научимся распознавать и удовлетворять эмоциональные потребности друг друга.'
              },
              {
                title: 'Модуль 3: Эффективная коммуникация',
                duration: '2.5 часа',
                content: 'Освоим техники активного слушания, я-сообщений и конструктивного диалога. Научимся говорить о сложном без обвинений.'
              },
              {
                title: 'Модуль 4: Разрешение конфликтов',
                duration: '2 часа',
                content: 'Изучим природу конфликтов и превратим их в возможность роста. Практические инструменты для мирного решения разногласий.'
              },
              {
                title: 'Модуль 5: Интимность и близость',
                duration: '2 часа',
                content: 'Углубим эмоциональную и физическую близость. Создадим пространство для доверия и уязвимости.'
              },
              {
                title: 'Модуль 6: Личные границы',
                duration: '1.5 часа',
                content: 'Научимся устанавливать здоровые границы, уважая себя и партнёра. Найдём баланс между "мы" и "я".'
              },
              {
                title: 'Модуль 7: Преодоление кризисов',
                duration: '2 часа',
                content: 'Разберём типичные кризисы в отношениях. Получим инструменты для их преодоления и укрепления связи.'
              },
              {
                title: 'Модуль 8: Создание будущего вместе',
                duration: '2 часа',
                content: 'Сформируем общее видение будущего. Составим план развития отношений и личностного роста.'
              }
            ].map((module, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="bg-white rounded-2xl shadow-md border-none px-6">
                <AccordionTrigger className="text-lg font-semibold text-foreground hover:text-primary py-6">
                  <div className="flex items-center gap-4 text-left">
                    <span className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold flex-shrink-0">
                      {index + 1}
                    </span>
                    <div className="flex-1">
                      <div>{module.title}</div>
                      <div className="text-sm text-muted-foreground font-normal mt-1">{module.duration}</div>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-6">
                  {module.content}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <section id="testimonials" className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <h3 className="text-4xl font-bold text-center mb-6 text-foreground">Отзывы участников</h3>
          <p className="text-center text-muted-foreground mb-12 text-lg">Истории людей, которые изменили свои отношения</p>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: 'Анна и Михаил',
                story: 'После 10 лет брака мы почти разучились слышать друг друга. Тренинг помог нам заново влюбиться и понять, что мы действительно нужны друг другу. Спасибо за возвращение счастья в нашу семью!',
                rating: 5
              },
              {
                name: 'Елена',
                story: 'Я пришла на тренинг одна, в отчаянии. Узнала так много о себе и своих паттернах. Теперь строю новые отношения осознанно, с пониманием того, чего я действительно хочу.',
                rating: 5
              },
              {
                name: 'Дмитрий и Ольга',
                story: 'Мы думали, что знаем всё об отношениях. Но тренинг открыл нам глаза на то, как много мы упускали. Научились говорить о сложном, стали ближе и счастливее. Рекомендуем всем парам!',
                rating: 5
              }
            ].map((testimonial, index) => (
              <Card key={index} className="border-none shadow-lg bg-gradient-to-br from-secondary/5 to-muted/5">
                <CardContent className="p-8 space-y-4">
                  <div className="flex gap-1 mb-2">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Icon key={i} name="Star" className="w-5 h-5 fill-primary text-primary" />
                    ))}
                  </div>
                  <p className="text-muted-foreground leading-relaxed italic">"{testimonial.story}"</p>
                  <div className="flex items-center gap-4 pt-4">
                    <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                      <Icon name="User" className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">Участники тренинга</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-4 bg-gradient-to-br from-muted/20 to-secondary/10">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img 
                src="https://cdn.poehali.dev/projects/f80efb35-83e1-43df-b467-95af444ea670/files/89e6aa60-2e23-4ed5-919e-a9744c23a1ad.jpg" 
                alt="Психолог-консультант" 
                className="rounded-3xl shadow-2xl w-full"
              />
            </div>
            <div className="space-y-6">
              <h3 className="text-4xl font-bold text-foreground">Обо мне</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Здравствуйте! Я — психолог-консультант с 12-летним опытом работы в области семейных и партнёрских отношений.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                За годы практики я помогла более 500 парам найти путь к гармонии, пройти через кризисы и создать прочные, счастливые отношения.
              </p>
              <div className="space-y-4 pt-4">
                <div className="flex items-start gap-3">
                  <Icon name="GraduationCap" className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-foreground">Образование</p>
                    <p className="text-muted-foreground">МГУ, факультет психологии. Сертифицированный гештальт-терапевт, специалист по системной семейной терапии</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="Award" className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-foreground">Подход</p>
                    <p className="text-muted-foreground">Интегративный метод, сочетающий лучшие практики гештальт-терапии, НЛП и системного подхода</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="Heart" className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-foreground">Моя миссия</p>
                    <p className="text-muted-foreground">Помочь каждой паре создать отношения, полные любви, доверия и взаимопонимания</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="availability" className="py-20 px-4 bg-gradient-to-br from-primary/10 via-secondary/10 to-muted/10">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-none shadow-xl bg-white">
              <CardContent className="p-8 text-center space-y-4">
                <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center mx-auto">
                  <Icon name="Users" className="w-10 h-10 text-primary" />
                </div>
                <div>
                  <p className="text-5xl font-bold text-primary mb-2">12</p>
                  <p className="text-muted-foreground">мест осталось на<br />групповой тренинг</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-none shadow-xl bg-white">
              <CardContent className="p-8 text-center space-y-4">
                <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center mx-auto">
                  <Icon name="Calendar" className="w-10 h-10 text-primary" />
                </div>
                <div>
                  <p className="text-5xl font-bold text-primary mb-2">25</p>
                  <p className="text-muted-foreground">января 2025<br />старт ближайшей группы</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-none shadow-xl bg-white">
              <CardContent className="p-8 text-center space-y-4">
                <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center mx-auto">
                  <Icon name="Clock" className="w-10 h-10 text-primary" />
                </div>
                <div>
                  <p className="text-5xl font-bold text-primary mb-2">16</p>
                  <p className="text-muted-foreground">часов глубокой работы<br />над отношениями</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="faq" className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-4xl">
          <h3 className="text-4xl font-bold text-center mb-6 text-foreground">Частые вопросы</h3>
          <p className="text-center text-muted-foreground mb-12 text-lg">Ответы на самые популярные вопросы о тренинге</p>
          
          <Accordion type="single" collapsible className="space-y-4">
            {[
              {
                question: 'Можно ли прийти на тренинг одному, без партнёра?',
                answer: 'Да, конечно! Многие участники приходят без партнёра. Вы узнаете о себе, своих паттернах в отношениях и получите инструменты для построения гармоничных отношений в будущем. Это отличная возможность подготовиться к новым отношениям или понять, что происходит в текущих.'
              },
              {
                question: 'Какой формат проведения тренинга?',
                answer: 'Тренинг проходит в интерактивном формате: теория, практические упражнения в парах и группах, разбор реальных ситуаций, медитации и техники релаксации. Есть формат онлайн и офлайн в комфортном пространстве в центре Москвы.'
              },
              {
                question: 'Сколько длится программа?',
                answer: 'Полная программа состоит из 8 модулей общей продолжительностью 16 часов. Занятия проходят по выходным: 4 встречи по 4 часа или 2 интенсива по 8 часов — на ваш выбор. Между встречами даю домашние задания для закрепления материала.'
              },
              {
                question: 'Что делать, если мы в кризисе и почти расстались?',
                answer: 'Тренинг помогает даже в сложных ситуациях, но если кризис острый, рекомендую начать с индивидуальной парной консультации. Я помогу стабилизировать ситуацию, а потом вы сможете присоединиться к групповому тренингу для углублённой работы.'
              },
              {
                question: 'Гарантируете ли вы результат?',
                answer: 'Результат зависит от вашей готовности работать над отношениями и применять полученные инструменты. Я гарантирую качественную программу, профессиональную поддержку и проверенные техники. 95% пар отмечают значительные улучшения после прохождения программы.'
              },
              {
                question: 'Конфиденциальна ли информация, которой мы делимся?',
                answer: 'Абсолютно! Всё, что обсуждается на тренинге, остаётся в группе. Мы подписываем соглашение о конфиденциальности. Ваша безопасность и приватность — мой главный приоритет.'
              },
              {
                question: 'Какая стоимость участия?',
                answer: 'Групповой тренинг — 25 000 рублей за полную программу. Индивидуальная консультация — 8 000 рублей/час. Парная сессия — 12 000 рублей/час. Есть система скидок при оплате сразу нескольких встреч. Возможна рассрочка.'
              }
            ].map((faq, index) => (
              <AccordionItem key={index} value={`faq-${index}`} className="bg-gradient-to-br from-white to-secondary/5 rounded-2xl shadow-md border-none px-6">
                <AccordionTrigger className="text-lg font-semibold text-foreground hover:text-primary py-6 text-left">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <section id="booking" className="py-20 px-4 bg-gradient-to-br from-muted/20 to-secondary/10">
        <div className="container mx-auto max-w-3xl">
          <h3 className="text-4xl font-bold text-center mb-6 text-foreground">Запись на тренинг</h3>
          <p className="text-center text-muted-foreground mb-12 text-lg">Заполните форму, и я свяжусь с вами для уточнения деталей</p>
          
          <Card className="border-none shadow-2xl">
            <CardContent className="p-8 md:p-12">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Ваше имя *</Label>
                  <Input 
                    id="name" 
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required 
                    placeholder="Введите ваше имя"
                    className="h-12"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="phone">Телефон *</Label>
                    <Input 
                      id="phone" 
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      required 
                      placeholder="+7 (___) ___-__-__"
                      className="h-12"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input 
                      id="email" 
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="example@mail.com"
                      className="h-12"
                    />
                  </div>
                </div>

                <div className="space-y-3">
                  <Label>Тип сессии *</Label>
                  <RadioGroup value={sessionType} onValueChange={setSessionType} className="space-y-3">
                    <div className="flex items-center space-x-3 border rounded-xl p-4 hover:bg-secondary/20 transition-colors cursor-pointer">
                      <RadioGroupItem value="individual" id="individual" />
                      <Label htmlFor="individual" className="flex-1 cursor-pointer">
                        <div className="font-semibold">Индивидуальная консультация</div>
                        <div className="text-sm text-muted-foreground">Работа с личными запросами</div>
                      </Label>
                    </div>
                    <div className="flex items-center space-x-3 border rounded-xl p-4 hover:bg-secondary/20 transition-colors cursor-pointer">
                      <RadioGroupItem value="couple" id="couple" />
                      <Label htmlFor="couple" className="flex-1 cursor-pointer">
                        <div className="font-semibold">Парная сессия</div>
                        <div className="text-sm text-muted-foreground">Для пар, работа с отношениями</div>
                      </Label>
                    </div>
                    <div className="flex items-center space-x-3 border rounded-xl p-4 hover:bg-secondary/20 transition-colors cursor-pointer">
                      <RadioGroupItem value="group" id="group" />
                      <Label htmlFor="group" className="flex-1 cursor-pointer">
                        <div className="font-semibold">Групповой тренинг</div>
                        <div className="text-sm text-muted-foreground">Участие в группе до 10 человек</div>
                      </Label>
                    </div>
                  </RadioGroup>
                </div>

                <div className="space-y-2">
                  <Label>Предпочитаемая дата *</Label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        className={`w-full h-12 justify-start text-left font-normal ${!date && "text-muted-foreground"}`}
                      >
                        <Icon name="Calendar" className="mr-2 h-5 w-5" />
                        {date ? format(date, 'PPP', { locale: ru }) : 'Выберите дату'}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={date}
                        onSelect={setDate}
                        locale={ru}
                        disabled={(date) => date < new Date()}
                      />
                    </PopoverContent>
                  </Popover>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Ваш запрос или вопрос</Label>
                  <Textarea 
                    id="message" 
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Расскажите немного о вашей ситуации или вопросах"
                    className="min-h-32"
                  />
                </div>

                <Button type="submit" size="lg" className="w-full h-14 text-lg bg-primary hover:bg-primary/90 text-foreground">
                  Отправить заявку
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="contacts" className="py-20 px-4 bg-gradient-to-br from-secondary/30 via-background to-muted/20">
        <div className="container mx-auto max-w-6xl">
          <h3 className="text-4xl font-bold text-center mb-6 text-foreground">Контакты</h3>
          <p className="text-center text-muted-foreground mb-12 text-lg">Свяжитесь со мной удобным способом</p>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto">
                  <Icon name="Phone" className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Телефон</h4>
                  <a href="tel:+79991234567" className="text-muted-foreground hover:text-primary transition-colors">
                    +7 (999) 123-45-67
                  </a>
                </div>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto">
                  <Icon name="Mail" className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Email</h4>
                  <a href="mailto:info@relations-training.ru" className="text-muted-foreground hover:text-primary transition-colors">
                    info@relations-training.ru
                  </a>
                </div>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto">
                  <Icon name="MessageCircle" className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Telegram</h4>
                  <a href="https://t.me/relations_training" className="text-muted-foreground hover:text-primary transition-colors">
                    @relations_training
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12 text-center">
            <p className="text-muted-foreground mb-4">Я провожу консультации онлайн и офлайн в Москве</p>
            <div className="flex justify-center gap-4 flex-wrap">
              <div className="flex items-center gap-2 text-muted-foreground">
                <Icon name="MapPin" className="w-5 h-5 text-primary" />
                <span>г. Москва, ул. Арбат, 10</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Icon name="Clock" className="w-5 h-5 text-primary" />
                <span>Пн-Пт: 10:00 - 20:00</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-foreground text-background py-12 px-4">
        <div className="container mx-auto max-w-6xl text-center space-y-4">
          <h2 className="text-2xl font-bold">Гармония отношений</h2>
          <p className="text-background/70">Тренинг для пар и индивидуальные консультации</p>
          <div className="pt-4 border-t border-background/20">
            <p className="text-background/60 text-sm">© 2024 Все права защищены</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;