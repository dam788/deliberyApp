import papas from '../assets/sections/papas.svg';
import pizza from '../assets/sections/pizza.svg';
import burger from '../assets/sections/burger.svg';

export const foodItems = [
  {
    id: 1,
    name: 'Pizza Especial',
    img:
      'https://previews.dropbox.com/p/thumb/ABE8rnMHiVV85bZoHF2lDEPY85BbNi7Y1PnCzj2PcdLpLaVctpgTl8HLldxIVq9aEV1IbwPHgeInJ_iyW3RD_qQ0NJyLohf1RcaVzCpcGoAdSapG4s9LT9VRjsUEOGsxxFSzDrrBFsLzD6ASPbIdwjKj2o-ioaG8EFMd1v993cjn3ZzipDO9dvn_z810NFXdnW7qMVKmlKcaSlNNK_fkIsAuZh7iKSFoJTPWeCH7sTkwxEGvj-BG2u6KthLVZTIVIA3i8xq2ZeATGH8MtCh-upgusrgXTHgYxZzcHMnEjiZpf67gIjgWfxISk70u5GPr09fukLWyweGYcuoU8HI0sXbsqiGgRsqBdultLczWFLM5ww/p.jpeg?fv_content=true&size_mode=5',
    section: 'Pizzas',
    price: 300,
    description: 'Pizza la piedra de jamon, morrón y muzza. ',
  },
  {
    id: 2,
    name: 'Pizza Cuatro Quesos',
    img:
      'https://previews.dropbox.com/p/thumb/ABEsFvAFt6exOiqtFChHgsOIC4_Dt6FRDJvJoGejy8O9yaN7f6mUnYADS70xoHXrenKJZlGdhcQ9mLjs_jK1xPOl1emCSHkurjghJmY5-KCgcvbKlpAF-h8Fi8PutRfS-DxpsZLimFytrFMZSaxk9hNI776MFN3L11wULu-koOqN2t6vIw6o6eiYwkW3DXKRb5_18e9LskZiVU5v15wSZVDD5P5JbEdWU2Py9w66Nypuan7xnkgO4-b3zXv-U_Ka4HqH_3aNU614LiHuyldq5-R_lvqwzDuYIrkC6eR0wsDY0lvin96uHGdZYh33UflBAGVdhmz0nkpuC0LPoZTgxPWNfprvBLX4yAnvGGX9iGCKEQ/p.jpeg?size=1600x1200&size_mode=3',
    section: 'Pizzas',
    price: 300,
    description: 'Pizza la piedra de 4 quesos diferentes',
  },
  {
    id: 3,
    name: 'Pizza Fugazeta',
    img:
      'https://previews.dropbox.com/p/thumb/ABHTUR5TcAj-cc1ZYLlplUl1I5PdLfWRT5GyAjcREX9anznMBYCj4ArI7V03KLZ1_oY4_3tflLYE88Ok0LmijiOH7DYtbulCperVyKlLwa9URs266kJ2HnMvzzpw7JLhPPigtulsa9XCTTSo9hA-8BAziDyt8Iu-3djeS5_goXCTpZ79jhiJGP-ZFmG6JNU3zS6kq17NdV5i0asd6HYwoHeyjwHGcrPTbFU0BwkJ4Z91AwP4nYk2yBFGhTvTAVNSb55UPX__iu-C2J1A9iuZsGYZ1eTs4J7t1mM7nQCeo37e1ghGHwoiLLCgq3WHR9INVyTrki8Un-5dO-W9j3qEqVcxpkfInf54aQPegjqgXbgfaQ/p.jpeg?fv_content=true&size_mode=5',
    section: 'Pizzas',
    price: 300,
    description: 'Pizza la piedra de cebolla y queso',
  },
  {
    id: 4,
    name: 'Burger Ciervo',
    img:
      'https://previews.dropbox.com/p/thumb/ABHRFtWuynKwT77YUGdu52gVF2_bdrxo7C9-frtdEhjLqbih7SEK2TsPtKvXoDAEHIi62NsMr3mn1S5SWTESi_ZVxVByWiQeSNQS03nZCEdQPkGkFzGJ8_jE61pCgItTbMoC6zBkVn-tjVCpxAgXevOYZEsKF6xyEq5EBeNdWvHL3ltbh1nD1zTYNZzJ7ko0Rr23TuGMthmazOpZ97H-6KMEizXHTeyf7sY61z2sk5NzxMLXp8e0kt2FbJjsocLN6wPn9X-smwEESFpJqdjWpzzn_3H7QiSSkRAk55c8S2B84ZvSVhJJ2PwSHJ4iytRpIhGVwN_WsVPwQZz5ip5QA4JUCacnu_m9qdoTTXfKejRjIQ/p.jpeg?fv_content=true&size_mode=5',
    section: 'Burgers',
    price: 300,
    description: 'Hamburguesa de 100% carne de ciervo',
  },
  {
    id: 5,
    name: 'Burger Pollo',
    img:
      'https://previews.dropbox.com/p/thumb/ABEHzb9C2HArOxovzlfnT04r7Foon2XvYDx2hlMYRRrWA4BHoaFhxUs72gesqRQ188lLxfP-QStWd03yayMzhCba4pJiXhWoZlckOJv83ILlLzFxKi4DLCAHnSai_Dqgk7xCHd1MMQuOT_Ob22H5qfQUNrLZEDp3f71PVDKduvVLgBG6QDJalE_dUet3a9L0koSj5a5BvXnh76fqPXrzlCKL9Q4mzbadWeACq2SrhrIrcxXty6e6tqeTSNOXbUDhfO_j4kSOnQRF0AzLFgG1lSxSDCLWM5MavyFJaqhM43Sa84SCuAJI1uHdtztzzrmPbM1X-CpRQxGxGjK5pGBaeR3ZzM4dpJxyg9yJOalRuHVVpQ/p.jpeg?fv_content=true&size_mode=5',
    section: 'Burgers',
    price: 300,
    description: 'Hamburguesa de 100% carne de pollo',
  },
  {
    id: 6,
    name: 'Burger Vegan',
    img:
      'https://previews.dropbox.com/p/thumb/ABFqJv_3bEu-UpM8NvEgfTEZjQN_p6elrkwRros00rf7e-zI-oG5WA1vSOl6LYv3k-aUh7iTYyHFJ6PdaqKcMPoZzmd8xb61B4kYUjTZAMUn_Q8cxL_z0nKJY0GjzhGUlPZrfSFRxO_39k0KzGp4o9wvKoosCKKcQCO33mVS1pIY-bzXsyWpsySZLBWzdGB-LMBE8IXUF4Rf4bkXkDojdKpCKMs2aa2Jx-d2Z6pbIz0GKj7Mt2CFkSyw6pc_bbbiXCOoL-3uyayo5kGt1RJKxBjKqPsGraMoD5IuU4-VUHW9Z6APQBFniCyx1RRZ_migwyG-orymn5YzHtwwmLLyvMu7KbQX7lalxhp0_Gxo-92ylQ/p.jpeg?fv_content=true&size_mode=5',
    section: 'Burgers',
    price: 300,
    description: 'Hamburguesa de 100% vegana',
  },
  {
    id: 7,
    name: 'Papas Bravas',
    img:
      'https://previews.dropbox.com/p/thumb/ABE-47Wnqr13Jr4DYeguXvaTDZLj_N3ynN3x8yBgaEEIcbIskNPJqALSpSKx_oygneRAJ48n76MTGBOnVWJxHnvnk9Ciu6hoGfkZhwTsW_91t1jlx1JDtNf1ZPJ5WEV-ov4b09kdiEp8Y11i8TbhwEkW78V6EnP6H8uXy1ZHwgAw7HD8tyYhie3zIkug6WBOfSSg_2MdmV5rhXbjXKsOSpn6Xn8XfyiMWOzz1XDUEv8DzdX0srGuCZRQWGYfODviFXnHhLSKb2oqozDNcbK8d2y7fAPSOIsfu22oNPENfqb01uNES4OHcQU5qLv7p49fExudUTbs5J7kH1r5IKYz7IOTUxt5pR1isITJQoIXqB0d3A/p.jpeg?fv_content=true&size_mode=5',
    section: 'Papas',
    price: 300,
    description: 'Papas rústicas',
  },
  {
    id: 8,
    name: 'Papas Chedar',
    img:
      'https://previews.dropbox.com/p/thumb/ABFFmcTRCPS--PC8yqz61MIOHjv0smtx2Jtw_WhupR_ZeEhgRWtg0S8aOHBp3IG5H-6sTXVHQN8X8IOgFut3c9itmJvuC52thGH4qJMO25WlLQ9m4qeAArPlqR6o4mULegl-KpYmOa28rQRzVf6o858tMGgG6RmOT5Tv7WQiK_CjRvL5h6LHya4Er9bU_RFAmMJELXDx1lEtf1yl0YxbOU-3XfWY8W9iAjyJCkT2z_uGoSEy3iklovRuz6qgza8QfXS8zN_8OXlIGJabljew1-qchSEzkO3bN-nG6Djk0A3tdP63o8GjIdXQTaYc-kq1rxArPy9f6ypRwdGEtJ7ZphIJA4oRA407dEaQ6r8FgEAC2Q/p.jpeg?size=1600x1200&size_mode=3',
    section: 'Papas',
    price: 300,
    description: 'Papas fritas con cheddar, panceta y verdeo',
  },
  {
    id: 9,
    name: 'Papas Verdeo',
    img:
      'https://previews.dropbox.com/p/thumb/ABHqnetrRQFu_q7bBsYvUkizw5hEq7RZi1dQ-HB7yZ7BvrWuXbE8pzkxl0GR95JYqC45wENyJSfqTWrrPe8ZdMu79yhhSxhGB3XNwHAshv4SqueffbU3Dj_islvvA4mlSGmS7nlljCufO_GnWgJok-4SXWyX-9FBmBOyyZdF8wHAZY1Vy1imD0ayviwPy1Oihl1yr0o8OZw7l4ZyIKKNPmChzJBwGojTEueeXKaBKF22_levV-nOwrGRABDBw5PtfdFCo8u41vbebDXwtziWNmoucaC1-hOLi6gFTFp85IDOL4aAxUi83eYlcKzv5JjObGz7tlMbrFywBCPOcHaWMCtVto52vU5Nn3PyXQwtY0cX3Q/p.jpeg?fv_content=true&size_mode=5',
    section: 'Papas',
    price: 300,
    description: 'Papas con alioli y',
  },
];

export const arraySections = [
  {
    section: 'Pizzas',
    imgTag: `${pizza}`,
  },
  {
    section: 'Burgers',
    imgTag: `${burger}`,
  },
  {
    section: 'Papas',
    imgTag: `${papas}`,
  },
];

export const Foods = foodItems.reduce((res, food) => {
  if (!res[food.section]) {
    res[food.section] = [];
  }
  res[food.section] = [...res[food.section], food];

  return res;
}, {});
